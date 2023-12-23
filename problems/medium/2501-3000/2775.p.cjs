// 2775 - Undefined to Null

function undefinedToNull(obj) {
    if (obj === null || obj === undefined) return null;
    if (typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) return obj.map(undefinedToNull);
    for (const key in obj) {
        obj[key] = undefinedToNull(obj[key]);
    }
    return obj;
}
