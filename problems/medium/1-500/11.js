// 11 - Container With Most Water

function maxArea(height) {
    let max = 0, l = 0, r = height.length - 1;
    while (l < r) {
        const min = Math.min(height[l], height[r]);
        max = Math.max((r - l) * min, max);
        if (height[l] < height[r]) l++;
        else r--;
    }
    return max;
}
