// 739 - Daily Temperatures

function dailyTemperatures(temperatures) {
    const res = new Array(temperatures.length).fill(0);
    const stack = [];
    for (let i = 0, cur; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
            cur = stack.pop();
            res[cur] = i - cur;
        }
        stack.push(i);
    }
    return res;
}
