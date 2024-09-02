// 1944 - Number of Visible People in a Queue

function canSeePersonsCount(heights) {
    const res = new Uint32Array(heights.length);
    const stack = [];
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[stack.at(-1)] < heights[i]) {
            res[stack.pop()]++;
        }
        if (stack.length) res[stack.at(-1)]++;
        stack.push(i);
    }
    return res;
}
