const { Pool } = require("pg");
import { getDBCreds } from "../utils/envUtils";

export const getSQLClient = async () => {
    const dbConn = getDBCreds();

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

export const runSQL = async (query: string) => {
    const connection = await getSQLClient();
    const res = await connection.query(query);
    return res;
};

export const createSchema = async (schema: string) => {
    return await runSQL(`CREATE SCHEMA IF NOT EXISTS ${schema};`);
};
