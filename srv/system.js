"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const publicCloud_1 = __importDefault(require("./handlers/publicCloud"));
class SystemFactory {
    static getSystemInstance(req) {
        //get system type
        return new publicCloud_1.default();
    }
}
exports.default = SystemFactory;
//# sourceMappingURL=system.js.map