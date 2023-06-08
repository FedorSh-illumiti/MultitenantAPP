"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgTypes = void 0;
const cache_1 = __importDefault(require("./cache"));
const TextBundle = require("@sap/textbundle").TextBundle;
var MsgTypes;
(function (MsgTypes) {
    MsgTypes[MsgTypes["Backend"] = 490] = "Backend";
    MsgTypes[MsgTypes["BTP"] = 491] = "BTP";
})(MsgTypes = exports.MsgTypes || (exports.MsgTypes = {}));
class ErrorHnd extends Error {
    constructor(type, messageIdent, message) {
        super(message);
        this.msg = {
            message: '',
            type: MsgTypes.BTP
        };
        this.msg.type = type;
        if (messageIdent) {
            this.msg.message = this.getTextBundle().getText(messageIdent);
        }
        else if (message) {
            this.msg.message = message;
        }
    }
    getTextBundle() {
        const bundle = new TextBundle("../i18n/i18n", cache_1.default.getInstance().getValue('lang'));
        return bundle;
    }
    raiseServiceError(req) {
        req.reject(this.msg.type, this.msg.message);
    }
    static raiseGeneralError(req, error) {
        req.reject(MsgTypes.Backend, error.message);
    }
}
exports.default = ErrorHnd;
//# sourceMappingURL=errorHandling.js.map