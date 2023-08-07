// 84 - Largest Rectangle in Histogram

/**
 * @param {number[]} heights
 * @return {number}
 */

function largestRectangleArea(heights) {
    heights.push(0);
    let max = 0;
    const stack = [];
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack.at(-1)]) {
            const height = heights[stack.pop()];
            const width = stack.length ? i - stack.at(-1) - 1 : i;
            max = Math.max(height * width, max);
        }
        stack.push(i);
    }
    return max;
}

module.exports = largestRectangleArea;
