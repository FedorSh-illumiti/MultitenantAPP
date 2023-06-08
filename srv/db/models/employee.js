"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModel = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
class Employee extends sequelize_1.Model {
}
const getModel = async (tenantID) => {
    const connection = await (0, config_1.default)(tenantID);
    Employee.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            primaryKey: true
        },
        employeename: {
            type: sequelize_1.DataTypes.STRING
        },
        employeeid: {
            type: sequelize_1.DataTypes.STRING
        }
    }, {
        sequelize: connection,
        paranoid: false,
        freezeTableName: true
    });
    await Employee.sync();
    return Employee;
};
exports.getModel = getModel;
//# sourceMappingURL=employee.js.map