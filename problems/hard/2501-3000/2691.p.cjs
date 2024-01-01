// 2691 - Immutability Helper

class ImmutableHelper {
    constructor(obj) {
        this.obj = obj;
        this.mutated = false;
    }
    produce(mutator) {
        const cur = {};
        mutator(this.#partialClone(this.obj, cur));
        if (this.mutated) {
            this.mutated = false;
            return this.#clone(this.obj, cur);
        }
        return this.obj;
    }
    #clone(obj, cur) {
        if (typeof obj !== 'object' || typeof cur !== 'object') return cur;
        if (obj === null) return cur;
        let copy;
        const entries = Object.entries(cur);
        if (Array.isArray(obj)) {
            copy = [...obj];
            for (let i = 0; i < entries.length; i++) {
                const key = Number(entries[i][0]);
                copy[key] = this.#clone(obj[key], entries[i][1]);
            }
        } else {
            copy = { ...obj };
            for (let i = 0; i < entries.length; i++) {
                const key = entries[i][0];
                copy[key] = this.#clone(obj[key], entries[i][1]);
            }
        }
        return copy;
    }
    #partialClone(obj, cur) {
        const handler = {
            get: (target, prop) => {
                if (typeof target[prop] === 'object' && target[prop] !== null) {
                    if (cur[prop] === undefined) cur[prop] = {};
                    return this.#partialClone(target[prop], cur[prop]);
                }
                return cur[prop] === undefined ? Reflect.get(target, prop) : cur[prop];
            },
            set: (target, prop, value) => {
                if (target[prop] === value) return;
                cur[prop] = value;
                this.mutated = true;
            },
        };
        return new Proxy(obj, handler);
    }
}
