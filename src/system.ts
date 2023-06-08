import PublicCloud from "./handlers/publicCloud";

export interface IRequest {
    handle(req:any)
}


class SystemFactory {
    static getSystemInstance(req:any):IRequest{
        //get system type
        return new PublicCloud();
    }
}

export default SystemFactory;
