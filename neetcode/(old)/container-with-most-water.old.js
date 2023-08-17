/**
 * @param {number[]} height
 * @return {number}
 */

module.exports = function maxArea(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        const area = (right - left) * Math.min(height[left], height[right]);
        max < area && (max = area);
        height[left] <= height[right] ? left++ : right--;
    }
    return max;
};
