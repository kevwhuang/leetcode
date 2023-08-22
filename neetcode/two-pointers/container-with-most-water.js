// 11 - Container With Most Water

/**
 * @param {number[]} height
 * @return {number}
 */

function maxArea(height) {
    let max = 0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        const area = (r - l) * Math.min(height[l], height[r]);
        max = Math.max(area, max);
        height[l] <= height[r] ? l++ : r--;
    }
    return max;
}

module.exports = maxArea;
