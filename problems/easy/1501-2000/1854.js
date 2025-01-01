// 1854 - Maximum Population Year

function maximumPopulation(logs) {
    const arr = new Uint8Array(101);
    for (let i = 0; i < logs.length; i++) {
        for (let j = logs[i][0]; j < logs[i][1]; j++) {
            arr[j - 1950]++;
        }
    }
    let res = 0;
    for (let i = 0; i < 101; i++) {
        if (arr[i] > arr[res]) res = i;
    }
    return res + 1950;
}
