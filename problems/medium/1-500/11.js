// 11 - Container With Most Water

function maxArea(height) {
    let area, max = 0, l = 0, r = height.length - 1;
    while (l < r) {
        area = (r - l) * Math.min(height[l], height[r]);
        max = Math.max(area, max);
        height[l] <= height[r] ? l++ : r--;
    }
    return max;
}
