"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LocCache {
    constructor() {
        this._cacheValues = [];
    }
    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    static getInstance() {
        if (!LocCache.instance) {
            LocCache.instance = new LocCache();
        }
        return LocCache.instance;
    }
    setValue({ name, value }) {
        //find values 
        const foundValues = this._cacheValues.find(el => el.name === name);
        if (!foundValues) {
            this._cacheValues.push({ name, value });
        }
        else {
            foundValues.value = value;
        }
    }
    getValue(name) {
        //find values 
        const foundValues = this._cacheValues.find(el => el.name === name);
        if (foundValues) {
            return foundValues.value;
        }
        throw new Error(`Value for ${name} is not found`);
    }
}
exports.default = LocCache;
//# sourceMappingURL=cache.js.map