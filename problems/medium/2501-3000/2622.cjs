// 2622 - Cache With Time Limit

class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }
    count() {
        return this.cache.size;
    }
    get(key) {
        return this.cache.has(key) ? this.cache.get(key)[0] : -1;
    }
    set(key, value, duration) {
        const cb = () => this.cache.delete(key);
        const exists = this.cache.has(key);
        if (exists) clearTimeout(this.cache.get(key)[1]);
        this.cache.set(key, [value, setTimeout(cb, duration)]);
        return exists;
    }
}
