// 2823 - Deep Object Filter

function deepFilter(obj, fn) {
    if (typeof obj !== 'object' || obj === null) {
        return fn(obj) ? obj : undefined;
    }
    if (Array.isArray(obj)) {
        const filtered = [];
        for (let i = 0; i < obj.length; i++) {
            const val = deepFilter(obj[i], fn);
            if (val !== undefined) filtered.push(val);
        }
        return filtered.length ? filtered : undefined;
    }
    const filtered = {};
    for (const key in obj) {
        const val = deepFilter(obj[key], fn);
        if (val !== undefined) filtered[key] = val;
    }
    if (Object.keys(filtered).length) return filtered;
}
