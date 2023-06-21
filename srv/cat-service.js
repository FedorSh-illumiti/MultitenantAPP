"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (srv) => {
    srv.on('*', '*', async (req) => {
        // const res = SystemFactory.getSystemInstance(req);
        // try {
        //    return await res.handle(req);
        // } catch (error) {
        //     if (error instanceof ErrorHnd) {
        //         error.raiseServiceError(req);
        //     }
        //     else {
        //         ErrorHnd.raiseGeneralError(req, error);
        //     }
        // }
    });
    srv.before('*', '*', req => {
        // new InitHndl().before(req);
    });
};
