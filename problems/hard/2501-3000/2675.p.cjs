// 2675 - Array of Objects to Matrix

function jsonToMatrix(arr) {
    function extract(obj) {
        const keys = [];
        for (const key in obj) {
            const val = obj[key];
            if (typeof val !== 'object' || val === null) {
                keys[key] = val;
            } else {
                const sub = extract(val);
                for (const subKey in sub) {
                    keys[`${key}.${subKey}`] = sub[subKey];
                }
            }
        }
        return keys;
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = extract(arr[i]);
    }
    let keys = new Set();
    for (let i = 0; i < arr.length; i++) {
        for (const key in arr[i]) {
            keys.add(key);
        }
    }
    const mat = Array.from({ length: arr.length + 1 }, () => []);
    mat[0] = keys = Array.from(keys).sort();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            mat[i + 1][j] = keys[j] in arr[i] ? arr[i][keys[j]] : '';
        }
    }
    return mat;
}
