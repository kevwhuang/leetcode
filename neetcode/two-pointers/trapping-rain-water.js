// 42 - Trapping Rain Water

/**
 * @param {number[]} height
 * @return {number}
 */

function trap(height) {
    let r = height.length - 1, l = lMax = rMax = vol = 0;
    while (l < r) {
        if (height[l] < lMax) vol += lMax - height[l];
        else lMax = height[l];
        if (height[r] < rMax) vol += rMax - height[r];
        else rMax = height[r];
        height[l] < height[r] ? l++ : r--;
    }
    return vol;
}

module.exports = trap;
