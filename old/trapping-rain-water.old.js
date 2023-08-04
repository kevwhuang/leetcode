/**
 * @param {number[]} height
 * @return {number}
 */

module.exports = function trap(height) {
    const LEN = height.length;
    let areaPillars = 0;
    let highest = 0;
    let left = 0;
    for (let i = 0; i < LEN; i++) {
        const val = height[i];
        if (val > highest) {
            highest = val;
            left = i;
        }
        areaPillars += val;
    }
    let areaFinal = LEN * highest - areaPillars;
    let right = height.lastIndexOf(highest);
    while (highest > 0) {
        areaFinal -= LEN + left - right - 1;
        highest--;
        for (let i = 0; i < left; i++) {
            if (height[i] === highest) {
                left = i;
                break;
            }
        }
        for (let i = LEN - 1; i > right; i--) {
            if (height[i] === highest) {
                right = i;
                break;
            }
        }
    }
    return areaFinal;
};
