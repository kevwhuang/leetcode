// 84 - Largest Rectangle in Histogram

/**
 * @param {number[]} heights
 * @return {number}
 */

function largestRectangleArea(heights) {
    heights.push(0);
    let res = 0;
    const stack = [];
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack.at(-1)]) {
            const height = heights[stack.pop()];
            const width = stack.length ? i - stack.at(-1) - 1 : i;
            res = Math.max(height * width, res);
        }
        stack.push(i);
    }
    return res;
}

module.exports = largestRectangleArea;
