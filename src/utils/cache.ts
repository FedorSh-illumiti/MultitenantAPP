type CacheType = {
    name:string,
    value:any
}

class LocCache {

    private static instance: LocCache;

    private _cacheValues:CacheType[];

    private constructor() { 
        this._cacheValues = [];
    }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): LocCache {
        if (!LocCache.instance) {
            LocCache.instance = new LocCache();
        }

        return LocCache.instance;
    }



    public setValue({name, value}:CacheType) {
        //find values 
        const foundValues = this._cacheValues.find(el=>el.name===name);
        if (!foundValues){
            this._cacheValues.push({name, value});
        }
        else {
            foundValues.value = value;
        }
    }
    
    public getValue(name:String) {
        //find values 
        const foundValues = this._cacheValues.find(el=>el.name===name);
        
        if (foundValues){
            return foundValues.value;
        }

        throw new Error(`Value for ${name} is not found`);

    }


}

export default LocCache;