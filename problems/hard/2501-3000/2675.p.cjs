// 2675 - Array of Objects to Matrix

function jsonToMatrix(arr) {
    function extractKeys(obj) {
        const keys = [];
        for (const key in obj) {
            const val = obj[key];
            if (typeof val !== 'object' || val === null) {
                keys[key] = val;
            } else {
                const sub = extractKeys(val);
                for (const subKey in sub) {
                    keys[`${key}.${subKey}`] = sub[subKey];
                }
            }
        }
        return keys;
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = extractKeys(arr[i]);
    }
    let keys = new Set();
    for (let i = 0; i < arr.length; i++) {
        for (const key in arr[i]) {
            keys.add(key);
        }
    }
    keys = Array.from(keys).sort();
    const mat = Array.from({ length: arr.length + 1 }, () => []);
    mat[0] = keys;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            const cell = arr[i][keys[j]];
            mat[i + 1][j] = cell === undefined ? '' : cell;
        }
    }
    return mat;
}
