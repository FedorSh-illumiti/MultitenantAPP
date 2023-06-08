import { Options, Sequelize } from "sequelize";
import { getDBCreds } from "../../utils/envUtils";
import { getSchemaName } from "../../utils/dbUtils";

const dbConn = getDBCreds();
const LOG = cds.log("sql");
let _connection;

export default async (tenantID?: string): Promise<Sequelize> => {
    if (_connection) {
        return _connection;
    }

    const settings: Options = {
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
        settings.schema = getSchemaName(tenantID);
    }

    const sequelize = new Sequelize(settings);
    _connection = sequelize;

    return sequelize;
};
