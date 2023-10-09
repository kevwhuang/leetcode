// 23 - collectStrings

function collectStrings(obj) {
    function traverse(item) {
        if (typeof item === 'string') res.push(item);
        else if (typeof item === 'object' && !Array.isArray(item)) {
            for (const k in item) {
                traverse(item[k]);
            }
        }
    }
    const res = [];
    traverse(obj);
    return res;
}
