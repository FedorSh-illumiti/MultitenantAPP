"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cache_1 = __importDefault(require("../utils/cache"));
class InitHndl {
    before(req) {
        cache_1.default.getInstance().setValue({ name: "lang", value: req.user.locale });
        cache_1.default.getInstance().setValue({ name: "req", value: req });
        cache_1.default.getInstance().setValue({ name: "req", value: req });
        cache_1.default.getInstance().setValue({ name: "tenant", value: req.tenant });
    }
}
exports.default = InitHndl;
//# sourceMappingURL=initHndl.js.map