// 11 - Container With Most Water

function maxArea(height) {
    let res = 0, l = 0, r = height.length - 1;
    while (l < r) {
        const min = Math.min(height[l], height[r]);
        res = Math.max((r - l) * min, res);
        if (height[l] < height[r]) l++;
        else r--;
    }
    return res;
}
