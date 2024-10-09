// 2705 - Compact Object

function compactObject(obj) {
    let clone;
    if (Array.isArray(obj)) {
        clone = [];
        for (let i = 0; i < obj.length; i++) {
            const val = obj[i];
            if (!val) continue;
            clone.push(typeof val === 'object' ? compactObject(val) : val);
        }
    } else {
        clone = {};
        for (const key in obj) {
            const val = obj[key];
            if (!val) continue;
            clone[key] = typeof val === 'object' ? compactObject(val) : val;
        }
    }
    return clone;
}
