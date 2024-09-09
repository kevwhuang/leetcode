// 2794 - Create Object From Two Arrays

function createObject(keysArr, valuesArr) {
    const obj = {};
    for (let i = 0; i < keysArr.length; i++) {
        const key = String(keysArr[i]);
        if (!(key in obj)) obj[key] = valuesArr[i];
    }
    return obj;
}
