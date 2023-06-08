"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandling_1 = __importStar(require("../utils/errorHandling"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const employee_1 = require("../db/models/employee");
const config_1 = __importDefault(require("../db/config/config"));
const cds_1 = __importDefault(require("@sap/cds"));
const connectivity_1 = require("@sap-cloud-sdk/connectivity");
const connectivity_2 = require("@sap-cloud-sdk/connectivity");
const LOG = cds_1.default.log("sql");
class PublicCloud {
    constructor() { }
    async handle(req) {
        await (0, config_1.default)(req.tenant);
        if (req.path.search("UserDetails") > -1) {
            //calls class handler
            // const { enterpriseProjectApi } = apiEnterpriseProjectSrv0002();
            const jwt = (0, connectivity_1.retrieveJwt)(req);
            // try {
            //     const res2 = await getAllDestinationsFromDestinationService({
            //         jwt,
            //     })
            //     debugger;
            // } catch (error) {
            //     debugger;
            // }
            const resss = await (0, connectivity_2.getDestination)({
                destinationName: "app-s4public",
                jwt,
                selectionStrategy: connectivity_2.DestinationSelectionStrategies.alwaysProvider
            });
            // console.log('getting!!!');
            // const res = await enterpriseProjectApi.requestBuilder()
            // .getAll()
            // // .addCustomHeaders({ APIKey: 'MFEMoSU30K2sYjeFYkZ3z6fvRdXyqqwH' })
            // .execute({
            //     destinationName: 'app-s4public',
            //     selectionStrategy: DestinationSelectionStrategies.alwaysSubscriber,
            //     jwt: retrieveJwt(req)
            // });
            // console.log('result!!!', res);
            const employeeModel = await (0, employee_1.getModel)();
            try {
                await employeeModel.create({
                    // id: 'dd1',
                    employeename: "xxx",
                    employeeid: "22"
                });
            }
            catch (error) {
                LOG.error("error:", error.message);
            }
            // // @ts-ignore
            // new Employee({
            //     id:'b95e3d57-619b-464f-a0fb-9ea63eb8e7a4'
            // }).save();
            // try {
            // } catch (error) {
            //     debugger;
            // }
            throw new errorHandling_1.default(errorHandling_1.MsgTypes.BTP, "METHOD_NOT_IMPLEMENTED");
        }
        else if (req.path.search("Projects") > -1) {
            try {
                const projectAPI = await cds_1.default.connect.to("API_ENTERPRISE_PROJECT_SRV_0002");
                const res = await projectAPI.run(req.query);
                return await projectAPI.run(req.query);
                // const { A_EnterpriseProject } = projectAPI.entities;
                // const result = await projectAPI.run(SELECT.from(A_EnterpriseProject).columns(projects=>{
                //     projects.Project,
                //     projects.to_EntProjTeamMember(as1=>{
                //         as1.CreatedByUser
                //     })
                // }).where({
                //     Project:
                //         'ENTPRJFDC'
                // }));
                // debugger;
            }
            catch (error) {
                debugger;
            }
        }
    }
}
exports.default = PublicCloud;
//# sourceMappingURL=publicCloud.js.map