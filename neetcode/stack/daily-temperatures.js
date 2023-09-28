// 739 - Daily Temperatures

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

function dailyTemperatures(temperatures) {
    const len = temperatures.length;
    const ans = new Array(len).fill(0);
    const stack = [];
    for (let i = 0, cur; i < len; i++) {
        while (stack.length) {
            if (temperatures[i] <= temperatures[stack[stack.length - 1]]) break;
            cur = stack.pop();
            ans[cur] = i - cur;
        }
        stack.push(i);
    }
    return ans;
}

module.exports = dailyTemperatures;
