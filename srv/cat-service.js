"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const initHndl_1 = __importDefault(require("./handlers/initHndl"));
const system_1 = __importDefault(require("./system"));
const errorHandling_1 = __importDefault(require("./utils/errorHandling"));
exports.default = (srv) => {
    srv.on('*', '*', async (req) => {
        const res = system_1.default.getSystemInstance(req);
        try {
            return await res.handle(req);
        }
        catch (error) {
            if (error instanceof errorHandling_1.default) {
                error.raiseServiceError(req);
            }
            else {
                errorHandling_1.default.raiseGeneralError(req, error);
            }
        }
    });
    srv.before('*', '*', req => {
        new initHndl_1.default().before(req);
    });
};
//# sourceMappingURL=cat-service.js.map