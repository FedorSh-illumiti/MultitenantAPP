"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cds_1 = __importDefault(require("@sap/cds"));
const body_parser_1 = __importDefault(require("body-parser"));
const xsenv_1 = __importDefault(require("@sap/xsenv"));
const xssec_1 = __importDefault(require("@sap/xssec"));
const passport_1 = __importDefault(require("passport"));
const library_1 = __importDefault(require("./library"));
const http_client_1 = __importDefault(require("@sap-cloud-sdk/http-client"));
const connectivity_1 = require("@sap-cloud-sdk/connectivity");
const LOG = cds_1.default.log('sql');
const services = xsenv_1.default.getServices({
    uaa: { label: "xsuaa" },
    registry: { label: "saas-registry" },
    dest: { label: 'destination' }
});
cds_1.default.on("bootstrap", (app) => {
    // // if (process.env.NODE_ENV === "production") {
    passport_1.default.use("JWT", new xssec_1.default.JWTStrategy(services.uaa));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.authenticate("JWT", {
        session: false
    }));
    // delete cds.env.requires['API_ENTERPRISE_PROJECT_SRV_0002'].credentials.destination;
    // cds.env.requires['API_ENTERPRISE_PROJECT_SRV_0002'].credentials.url = 'https://my404308-api.s4hana.cloud.sap/sap/opu/odata/sap/API_ENTERPRISE_PROJECT_SRV;v=0002';
    // cds.env.requires['API_ENTERPRISE_PROJECT_SRV_0002'].credentials.authentication = "BasicAuthentication";
    // cds.env.requires['API_ENTERPRISE_PROJECT_SRV_0002'].credentials.username = "ZRNDCOMMUNICATION";
    // cds.env.requires['API_ENTERPRISE_PROJECT_SRV_0002'].credentials.password = "PprgsNygRpKh9TqWSvn\YuNeSlsjmKQWQUWVcYJX";
    // // }
    //app.use(bodyParser.json()); bug with this
    // app.use(proxy());
    initapi(app);
});
function initapi(app) {
    // const services = xsenv.getServices({
    //     uaa: { tag: 'xsuaa' },
    //     registry: { tag: 'SaaS' }
    //     ,dest: { tag: 'destination' }
    // });
    app.get("/user", function (req, res) {
        let info = { user: req.user };
        return res.status(200).send(info);
    });
    // const app = express();
    // subscribe/onboard a subscriber tenant
    app.put("/callback/v1.0/tenants/*", body_parser_1.default.json(), async function (req, res) {
        if (!req.authInfo.checkLocalScope("Callback")) {
            LOG.error("Forbidden: Subscribe requires Callback scope!");
            res.status(403).send("Forbidden");
            return;
        }
        let tenantURL = process.env.APP_PROTOCOL + "://" + req.body.subscribedSubdomain + "-" + process.env.APP_URI;
        LOG.info("Subscribe:", req.body.subscribedSubdomain, req.body.subscribedTenantId, tenantURL);
        library_1.default.createRoute(req.body.subscribedSubdomain, services.registry.appName + "-app").then(async function (result) {
            // try {
            //     await initDB(req.body.subscribedTenantId);
            // } catch (error) {
            //     LOG.error(error.message);
            // }
            res.status(200).send(tenantURL);
        }, function (err) {
            LOG.error(err.stack);
            res.status(500).send(err.message);
        });
    });
    // unsubscribe/offboard a subscriber tenant
    app.delete("/callback/v1.0/tenants/*", body_parser_1.default.json(), function (req, res) {
        if (!req.authInfo.checkLocalScope("Callback")) {
            LOG.error("Forbidden: Unsubscribe requires Callback scope!");
            res.status(403).send("Forbidden");
            return;
        }
        LOG.info("Unsubscribe:", req.body.subscribedSubdomain, req.body.subscribedTenantId);
        // delete route
        library_1.default.deleteRoute(req.body.subscribedSubdomain, services.registry.appName + "-app").then(function (result) {
            res.status(200).send("");
        }, function (err) {
            LOG.error(err.stack);
            res.status(500).send(err.message);
        });
    });
    // get reuse service dependencies
    app.get("/callback/v1.0/dependencies", function (req, res) {
        if (!req.authInfo.checkLocalScope('Callback')) {
            console.log('Forbidden: Dependencies requires Callback scope!');
            res.status(403).send('Forbidden');
            return;
        }
        let dependencies = [{
                'xsappname': services.dest.xsappname
            }];
        res.status(200).json(dependencies);
    });
    // app subscriptions
    app.get("/srv/subscriptions", function (req, res) {
        if (req.authInfo.checkScope('$XSAPPNAME.Administrator')) {
            library_1.default.getSubscriptions(services.registry).then(function (result) {
                res.status(200).json(result);
            }, function (err) {
                console.log(err.stack);
                res.status(500).send(err.message);
            });
        }
        else {
            res.status(403).send('Forbidden');
        }
    });
    app.get("/srv/info", function (req, res) {
        if (req.authInfo.checkScope("$XSAPPNAME.User")) {
            let info = {
                userInfo: req.user,
                subdomain: req.authInfo.getSubdomain(),
                tenantId: req.authInfo.getZoneId()
            };
            res.status(200).json(info);
        }
        else {
            res.status(403).send("Forbidden");
        }
    });
    // // destination reuse service
    app.get('/srv/destinations', async function (req, res) {
        console.log('Retrive destinations!!!');
        if (req.authInfo.checkScope('$XSAPPNAME.User')) {
            try {
                let res1 = await http_client_1.default.executeHttpRequest({
                    destinationName: req.query.destination || '',
                    jwt: (0, connectivity_1.retrieveJwt)(req)
                }, {
                    method: 'GET',
                    url: req.query.path || '/'
                });
                res.status(200).json(res1.data);
                console.log('Retrive destinations!!!:', res1.data);
            }
            catch (err) {
                console.log(err.stack);
                res.status(500).send(err.message);
                console.log('Retrive destinations!!!:', err.message);
            }
        }
        else {
            res.status(403).send('Forbidden');
        }
    });
}
module.exports = cds_1.default.server;
