"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetDb = exports.Employee = exports.Sequelize = exports.sequelize = void 0;
const envUtils_1 = require("../utils/envUtils");
const sequelize_typescript_1 = require("sequelize-typescript");
Object.defineProperty(exports, "Sequelize", { enumerable: true, get: function () { return sequelize_typescript_1.Sequelize; } });
const employee_1 = require("./models/employee");
Object.defineProperty(exports, "Employee", { enumerable: true, get: function () { return employee_1.Employee; } });
const dbConn = (0, envUtils_1.getDBCreds)();
console.log('dbconn:', dbConn);
const sequelize = new sequelize_typescript_1.Sequelize({
    database: dbConn.database,
    dialect: 'postgres',
    username: dbConn.user,
    password: dbConn.password,
    logging: process.env.NODE_ENV === 'production' ? false : true,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 60000,
        idle: 10000,
    },
    storage: ':memory:',
    models: [employee_1.Employee],
    schema: dbConn.schema
});
exports.sequelize = sequelize;
async function resetDb() {
    try {
        await sequelize.sync({ force: true });
        //   logger.debug("DB: Database initialized");
    }
    catch (ex) {
        //   logger.error("DB: ERROR initializing database");
        //   logger.error(ex);
        return false;
    }
    return true;
}
exports.resetDb = resetDb;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsZ0RBQStDO0FBQy9DLCtEQUFpRDtBQXdDM0IsMEZBeENiLGdDQUFTLE9Bd0NhO0FBdkMvQixnREFBMkM7QUF3Q2hDLHlGQXhDSCxtQkFBUSxPQXdDRztBQXRDbkIsTUFBTSxNQUFNLEdBQUcsSUFBQSxxQkFBVSxHQUFFLENBQUM7QUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxnQ0FBUyxDQUFDO0lBQzVCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtJQUN6QixPQUFPLEVBQUUsVUFBVTtJQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUk7SUforecastingkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO0lBQ3pCLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtJQUM3RCxjQUFjLEVBQUU7UUFDWixHQUFHLEVBQUU7WUFDRCxPQUFPLEVBQUUsSUFBSTtZQUNiLGtCQUFrQixFQUFFLEtBQUs7U0FDNUI7S0FDSjtJQUNELElBQUksRUFBRTtRQUNGLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLENBQUM7UUFDTixPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRSxLQUFLO0tBQ2Q7SUFDRCxPQUFPLEVBQUUsVUFBVTtJQUNuQixNQUFNLEVBQUUsQ0FBQyxtQkFBUSxDQUFDO0lBQ2xCLE1BQU0sRUFBQyxNQUFNLENBQUMsTUFBTTtDQUNyQixDQUFDLENBQUM7QUFjTSw4QkFBUztBQVpsQixLQUFLLFVBQVUsT0FBTztJQUNwQixJQUFJO1FBQ0YsTUFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDeEMsOENBQThDO0tBQzdDO0lBQUMsT0FBTyxFQUFFLEVBQUU7UUFDYixxREFBcUQ7UUforecastingkQsc0JBQXNCO1FBQ3BCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFJUSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgZ2V0REJDcmVkcyB9IGZyb20gXCIuLi91dGlscy9lbnZVdGlsc1wiO1xuaW1wb3J0IHsgU2VxdWVsaXplIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IHtFbXBsb3llZX0gZnJvbSAnLi9tb2RlbHMvZW1wbG95ZWUnO1xuXG5jb25zdCBkYkNvbm4gPSBnZXREQkNyZWRzKCk7XG5jb25zb2xlLmxvZygnZGJjb25uOicsIGRiQ29ubik7XG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHtcbiAgICBkYXRhYmFzZTogZGJDb25uLmRhdGFiYXNlLFxuICAgIGRpYWxlY3Q6ICdwb3N0Z3JlcycsXG4gICAgdXNlcm5hbWU6IGRiQ29ubi51c2VyLFxuICAgIHBhc3N3b3JkOiBkYkNvbm4ucGFzc3dvcmQsXG4gICAgbG9nZ2luZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IGZhbHNlIDogdHJ1ZSxcbiAgICBkaWFsZWN0T3B0aW9uczoge1xuICAgICAgICBzc2w6IHtcbiAgICAgICAgICAgIHJlcXVpcmU6IHRydWUsXG4gICAgICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBwb29sOiB7XG4gICAgICAgIG1heDogNSxcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBhY3F1aXJlOiA2MDAwMCxcbiAgICAgICAgaWRsZTogMTAwMDAsXG4gICAgfSxcbiAgICBzdG9yYWdlOiAnOm1lbW9yeTonLFxuICAgIG1vZGVsczogW0VtcGxveWVlXSwgLy8gb3IgW1BsYXllciwgVGVhbV0sXG4gICAgc2NoZW1hOmRiQ29ubi5zY2hlbWFcbiAgfSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gcmVzZXREYigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2VxdWVsaXplLnN5bmMoeyBmb3JjZTogdHJ1ZSB9KTtcbiAgICAvLyAgIGxvZ2dlci5kZWJ1ZyhcIkRCOiBEYXRhYmFzZSBpbml0aWFsaXplZFwiKTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgIC8vICAgbG9nZ2VyLmVycm9yKFwiREI6IEVSUk9SIGluaXRpYWxpemluZyBkYXRhYmFzZVwiKTtcbiAgICAvLyAgIGxvZ2dlci5lcnJvcihleCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZXhwb3J0IHsgc2VxdWVsaXplLCBTZXF1ZWxpemUgfTtcbiAgZXhwb3J0IHsgRW1wbG95ZWUgfTtcbiAgZXhwb3J0IHsgcmVzZXREYiB9OyJdfQ==