// 2822 - Inversion of Object

function invertObject(obj) {
    const res = {};
    for (const val in obj) {
        const key = obj[val];
        if (!res[key]) res[key] = val;
        else if (Array.isArray(res[key])) res[key].push(val);
        else res[key] = [res[key], val];
    }
    return res;
}
