// 84 - Largest Rectangle in Histogram

/**
 * @param {number[]} heights
 * @return {number}
 */

function largestRectangleArea(heights) {
    heights.push(0);
    let max = 0;
    for (let i = 0, stack = []; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = !stack.length ? i : i - stack[stack.length - 1] - 1;
            max = Math.max(height * width, max);
        }
        stack.push(i);
    }
    return max;
}

module.exports = largestRectangleArea;
