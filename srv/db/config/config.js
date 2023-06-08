"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const envUtils_1 = require("../../utils/envUtils");
const dbUtils_1 = require("../../utils/dbUtils");
const dbConn = (0, envUtils_1.getDBCreds)();
const LOG = cds.log("sql");
let _connection;
exports.default = async (tenantID) => {
    if (_connection) {
        return _connection;
    }
    const settings = {
        database: dbConn.database,
        dialect: "postgres",
        username: dbConn.user,
        password: dbConn.password,
        host: dbConn.url,
        logging: (...msg) => {
            LOG.info(msg[0]);
        },
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 60000,
            idle: 10000
        },
        storage: ":memory:"
        // models: [Employee], // or [Player, Team],
    };
    if (tenantID) {
        settings.schema = (0, dbUtils_1.getSchemaName)(tenantID);
    }
    const sequelize = new sequelize_1.Sequelize(settings);
    _connection = sequelize;
    return sequelize;
};
//# sourceMappingURL=config.js.map