"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const approuter = require('@sap/approuter');
const ar = approuter();
ar.beforeRequestHandler.use('/userInfo', (req, res) => {
    if (!req.user) {
        res.statusCode = 403;
        res.end('Missing JWT Token');
    }
    else {
        const user = req.user;
        const token = (0, jwt_decode_1.default)(user.token.accessToken);
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        res.end(JSON.stringify({
            "loginName": user.id,
            "firstName": token.given_name,
            "lastName": token.family_name,
            "email": token.email,
            "origin": token.origin,
            "roles": token["xs.system.attributes"]["xs.rolecollections"],
            "sessionTimeout": req.routerConfig.sessionTimeout,
            "token": user.token.accessToken,
        }));
    }
});
ar.start();
//# sourceMappingURL=extended-server.js.map