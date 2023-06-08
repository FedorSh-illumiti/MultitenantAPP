import LocCache from "../utils/cache";
import sequelize from "../db/config/config";

class InitHndl {
    public before(req: any) {
        LocCache.getInstance().setValue({ name: "lang", value: req.user.locale });
        LocCache.getInstance().setValue({ name: "req", value: req });
        LocCache.getInstance().setValue({ name: "req", value: req });
        LocCache.getInstance().setValue({ name: "tenant", value: req.tenant });
    }
}

export default InitHndl;
