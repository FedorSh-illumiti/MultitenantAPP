import LocCache from "../utils/cache";
import { IRequest } from "../system";
import ErrorHnd, { MsgTypes } from "../utils/errorHandling";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getModel } from "../db/models/employee";
import getConnection from "../db/config/config";
import cds from "@sap/cds";
import { retrieveJwt } from "@sap-cloud-sdk/connectivity";
import { DestinationSelectionStrategies, getDestination } from "@sap-cloud-sdk/connectivity";

const LOG = cds.log("sql");

class PublicCloud implements IRequest {
    constructor() {}

    async handle<T>(req: any): Promise<any> {
        await getConnection(req.tenant);

        if (req.path.search("UserDetails") > -1) {
            //calls class handler

            // const { enterpriseProjectApi } = apiEnterpriseProjectSrv0002();
            const jwt = retrieveJwt(req);
            // try {
            //     const res2 = await getAllDestinationsFromDestinationService({
            //         jwt,

            //     })
            //     debugger;
            // } catch (error) {
            //     debugger;
            // }

            const resss = await getDestination({
                destinationName: "app-s4public",
                jwt,
                selectionStrategy: DestinationSelectionStrategies.alwaysProvider
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

            const employeeModel = await getModel();

            try {
                await employeeModel.create({
                    // id: 'dd1',
                    employeename: "xxx",
                    employeeid: "22"
                });
            } catch (error) {
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
            throw new ErrorHnd(MsgTypes.BTP, "METHOD_NOT_IMPLEMENTED");
        } else if (req.path.search("Projects") > -1) {
            try {
                const projectAPI = await cds.connect.to("API_ENTERPRISE_PROJECT_SRV_0002");
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
            } catch (error) {
                debugger;
            }
        }
    }
}

export default PublicCloud;
