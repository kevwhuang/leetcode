// 2755 - Deep Merge of Two Objects

function deepMerge(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return obj2;
    if (obj1 === null || obj2 === null) return obj2;
    if (Array.isArray(obj1) !== Array.isArray(obj2)) return obj2;
    const merged = obj1;
    for (const key in obj2) {
        merged[key] = key in merged
            ? deepMerge(merged[key], obj2[key])
            : obj2[key];
    }
    return merged;
}
