// 2722 - Join Two Arrays by ID

function join(arr1, arr2) {
    const obj = {};
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i].id] = arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        const id = arr2[i].id;
        if (id in obj) {
            for (const key in arr2[i]) {
                obj[id][key] = arr2[i][key];
            }
        } else {
            obj[id] = arr2[i];
        }
    }
    return Object.values(obj);
}
