"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDB = exports.getSchemaName = void 0;
const config_1 = __importDefault(require("../db/config/config"));
const getSchemaName = (tenantId) => {
    const tenantSchema = tenantId.replace(/ /g, "").replace(/-/g, "");
    return `forecasting-${tenantSchema}`;
};
exports.getSchemaName = getSchemaName;
const initDB = async (tenantId) => {
    const connection = await (0, config_1.default)();
    await connection.createSchema((0, exports.getSchemaName)(tenantId), {});
};
exports.initDB = initDB;
//# sourceMappingURL=dbUtils.js.map