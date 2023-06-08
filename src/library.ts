
import cfenv from "cfenv";
import httpClient from "@sap-cloud-sdk/http-client";
const appEnv = cfenv.getAppEnv();
const LOG = cds.log('sql')



const getSubscriptions = async (registry) => {
    try {
        // get subscriptions
        let res = await httpClient.executeHttpRequest({ destinationName: 'app-registry' }, {
            method: 'GET',
            url: '/saas-manager/v1/application/subscriptions'
        });
        return res.data;
    } catch (err) {
        LOG.info(err.stack);
        return err.message;
    }
};

const getCFInfo = async (appname) => {
    try {
        // get app GUID
        let res1 = await httpClient.executeHttpRequest({ destinationName: 'app-cfapi' }, {
            method: 'GET',
            url: '/v3/apps?organization_guids=' + appEnv.app.organization_id + '&space_guids=' + appEnv.app.space_id + '&names=' + appname
        });
        // get domain GUID
        let res2 = await httpClient.executeHttpRequest({ destinationName: 'app-cfapi' }, {
            method: 'GET',
            url: '/v3/domains?names=' + /\.(.*)/gm.exec(appEnv.app.application_uris[0])[1]
        });
        let results = {
            'app_id': res1.data.resources[0].guid,
            'domain_id': res2.data.resources[0].guid
        };
        return results;
    } catch (err) {
        LOG.info(err.stack);
        return err.message;
    }
};

const createRoute = async (subscribedSubdomain, appname) => {
    getCFInfo(appname).then(
        async function (CFInfo) {
            try {
                // create route
                let res1 = await httpClient.executeHttpRequest({ destinationName: 'app-cfapi' }, {
                    method: 'POST',
                    url: '/v3/routes',
                    data: {
                        'host': subscribedSubdomain + '-' + process.env.APP_URI.split('.')[0],
                        'relationships': {
                            'space': {
                                'data': {
                                    'guid': appEnv.app.space_id
                                }
                            },
                            'domain': {
                                'data': {
                                    'guid': CFInfo.domain_id
                                }
                            }
                        }
                    },
                });
                // map route to app
                let res2 = await httpClient.executeHttpRequest({ destinationName: 'app-cfapi' }, {
                    method: 'POST',
                    url: '/v3/routes/' + res1.data.guid + '/destinations',
                    data: {
                        'destinations': [{
                            'app': {
                                'guid': CFInfo.app_id
                            }
                        }]
                    },
                });
                LOG.info('Route created for ' + subscribedSubdomain);
                return res2.data;
            } catch (err) {
                LOG.error(err.stack);
                return err.message;
            }
        },
        function (err) {
            LOG.error(err.stack);
            return err.message;
        });
};

const deleteRoute = async (subscribedSubdomain, appname) => {
    getCFInfo(appname).then(
        async function (CFInfo) {
            try {
                // get route id
                let res1 = await httpClient.executeHttpRequest({ destinationName: 'app-cfapi' }, {
                    method: 'GET',
                    url: '/v3/apps/' + CFInfo.app_id + '/routes?hosts=' + subscribedSubdomain + '-' + process.env.APP_URI.split('.')[0]
                });
                if (res1.data.pagination.total_results === 1) {
                    try {
                        // delete route
                        let res2 = await httpClient.executeHttpRequest({ destinationName: 'app-cfapi' }, {
                            method: 'DELETE',
                            url: '/v3/routes/' + res1.data.resources[0].guid
                        });
                        LOG.info('Route deleted for ' + subscribedSubdomain);
                        return res2.data;
                    } catch (err) {
                        LOG.error(err.stack);
                        return err.message;
                    }
                } else {
                    let errmsg = { 'error': 'Route not found' };
                    LOG.error(errmsg);
                    return errmsg;
                }
            } catch (err) {
                LOG.error(err.stack);
                return err.message;
            }
        },
        function (err) {
            LOG.error(err.stack);
            return err.message;
        });
};

export default {getSubscriptions,deleteRoute, createRoute, getCFInfo}




