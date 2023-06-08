import { Service } from "@sap/cds/apis/services";
import InitHndl from "./handlers/initHndl";
import SystemFactory from "./system";
import ErrorHnd from "./utils/errorHandling";


export default (srv: Service) => {

    srv.on('*', '*', async req  => {
        const res = SystemFactory.getSystemInstance(req);
        try {
           return await res.handle(req);
        } catch (error) {
            if (error instanceof ErrorHnd) {
                error.raiseServiceError(req);
            }
            else {
                ErrorHnd.raiseGeneralError(req, error);
            }
        }
    })


    srv.before('*','*', req=>{
        new InitHndl().before(req);
    });

}