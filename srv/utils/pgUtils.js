"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchema = exports.runSQL = exports.getSQLClient = void 0;
const { Pool } = require("pg");
const envUtils_1 = require("../utils/envUtils");
const getSQLClient = async () => {
    const dbConn = (0, envUtils_1.getDBCreds)();
    // database: dbConn.database,
    // dialect: 'postgres',
    // username: dbConn.user,
    // password: dbConn.password,
    // host:dbConn.url,
    const pool = new Pool({
        host: dbConn.url,
        user: dbConn.user,
        password: dbConn.password,
        database: dbConn.database,
        port: dbConn.port,
        // ssl: true,
        dialectOptions: {
            ssl: { rejectUnauthorized: false }
        }
    });
    return await pool.connect();
};
exports.getSQLClient = getSQLClient;
const runSQL = async (query) => {
    const connection = await (0, exports.getSQLClient)();
    const res = await connection.query(query);
    return res;
};
exports.runSQL = runSQL;
const createSchema = async (schema) => {
    return await (0, exports.runSQL)(`CREATE SCHEMA IF NOT EXISTS ${schema};`);
};
exports.createSchema = createSchema;
//# sourceMappingURL=pgUtils.js.map