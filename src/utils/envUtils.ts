const xsenv = require("@sap/xsenv");

export const getTenantID =()=>{
    var svc = xsenv.serviceCredentials({ tag: 'xsuaa' });
    return svc.tenantid;
}

export const getDBCreds = ()=>{
    const tenantID = getTenantID();
    let settings:any;
    try {
        settings = xsenv.getServices( { name: "custom-service:forecasting-settings" } );
    } catch (error) {
        settings = xsenv.getServices( { name: "forecasting-settings" } );
    }
    const dbSettings = settings.name[tenantID];
    return dbSettings;

}




