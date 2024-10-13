// 2691 - Immutability Helper

class ImmutableHelper {
    constructor(obj) {
        this.obj = obj;
    }
    produce(mutator) {
        const setter = (prop, val) => obj[prop] = val;
        const obj = { clone: this.obj };
        mutator(this.#profixy(obj, obj, setter).clone);
        return obj.clone;
    }
    #profixy(obj, orig, setter) {
        const handler = {
            get: (_, prop) => {
                let val = obj[prop];
                if (!val || typeof val !== 'object') return val;
                return this.#profixy(val, orig[prop], (nextProp, nextVal) => {
                    if (val === orig[prop]) {
                        val = Array.isArray(val) ? [...val] : { ...val };
                        obj = setter(prop, val);
                    }
                    val[nextProp] = nextVal;
                    return val;
                });
            },
            set: (_, prop, val) => {
                obj = setter(prop, val);
            },
        };
        return new Proxy(obj, handler);
    }
}
