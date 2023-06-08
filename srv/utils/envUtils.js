"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDBCreds = exports.getTenantID = void 0;
const xsenv = require("@sap/xsenv");
const getTenantID = () => {
    var svc = xsenv.serviceCredentials({ tag: 'xsuaa' });
    return svc.tenantid;
};
exports.getTenantID = getTenantID;
const getDBCreds = () => {
    const tenantID = (0, exports.getTenantID)();
    let settings;
    try {
        settings = xsenv.getServices({ name: "custom-service:forecasting-settings" });
    }
    catch (error) {
        settings = xsenv.getServices({ name: "forecasting-settings" });
    }
    const dbSettings = settings.name[tenantID];
    return dbSettings;
};
exports.getDBCreds = getDBCreds;
//# sourceMappingURL=envUtils.js.map