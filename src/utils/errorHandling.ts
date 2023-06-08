import LocCache from "./cache";

const TextBundle = require("@sap/textbundle").TextBundle;

export enum MsgTypes {
    Backend = 490,
    BTP = 491
}

type MsgType = {
    message:string,
    type: MsgTypes
}

class ErrorHnd extends Error {
    
    private msg:MsgType={
        message:'',
        type:MsgTypes.BTP
    };

    constructor(type:MsgTypes, messageIdent?:string, message?:string) {
        super(message);

        
        this.msg.type = type;
        if (messageIdent){
            this.msg.message = this.getTextBundle().getText(messageIdent);           
        }
        else if (message) {
            this.msg.message = message;
        }

      }
    
    public getTextBundle() {
        const bundle = new TextBundle("../i18n/i18n", LocCache.getInstance().getValue('lang'));
        return bundle;
    }

    public raiseServiceError(req:any){
        req.reject(this.msg.type, this.msg.message);
    }

    public static raiseGeneralError(req:any,error:Error){
        req.reject(MsgTypes.Backend, error.message);
    }
    
}

export default ErrorHnd;