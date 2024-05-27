// 3160 - Find the Number of Distinct Colors Among the Balls

function queryResults(limit, queries) {
    const arr = new Array(limit + 1);
    const map = new Map();
    for (let i = 0; i < queries.length; i++) {
        const ball = queries[i][0];
        if (arr[ball]) {
            if (map.get(arr[ball]) === 1) map.delete(arr[ball]);
            else map.set(arr[ball], map.get(arr[ball]) - 1);
        }
        const color = queries[i][1];
        arr[ball] = color;
        map.set(color, (map.get(color) ?? 0) + 1);
        queries[i] = map.size;
    }
    return queries;
}
