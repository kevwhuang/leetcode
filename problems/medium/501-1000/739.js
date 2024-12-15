// 739 - Daily Temperatures

function dailyTemperatures(temperatures) {
    const res = new Uint32Array(temperatures.length);
    const S = [], arr = temperatures;
    for (let i = 0; i < arr.length; i++) {
        while (S.length && arr[S.at(-1)] < arr[i]) {
            res[S.at(-1)] = i - S.pop();
        }
        S.push(i);
    }
    return res;
}
