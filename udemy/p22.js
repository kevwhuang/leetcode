// 22 - stringifyNumbers

function stringifyNumbers(obj) {
    const res = {};
    for (const k in obj) {
        const cur = obj[k];
        if (typeof cur === 'object' && !Array.isArray(cur)) {
            res[k] = stringifyNumbers(cur);
        }
        else if (typeof cur === 'number') res[k] = String(cur);
        else res[k] = cur;
    }
    return res;
}
