"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_decode_1 = __importDefault(require("jwt-decode"));
class userDetails {
    async handleGet(req) {
        const token = req.req.tokenInfo.getTokenValue();
        const tokenDecoded = (0, jwt_decode_1.default)(token);
        return {
            email: tokenDecoded.email,
            familyName: tokenDecoded.family_name,
            givenName: tokenDecoded.given_name,
            logonName: req.req.user.id,
            initials: (tokenDecoded.given_name[0] + tokenDecoded.family_name[0]).toUpperCase()
        };
    }
}
exports.default = userDetails;
//# sourceMappingURL=userDetails.js.map