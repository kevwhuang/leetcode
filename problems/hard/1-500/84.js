// 84 - Largest Rectangle in Histogram

function largestRectangleArea(heights) {
    heights.push(0);
    let res = 0, i = -1;
    const S = [];
    while (++i < heights.length) {
        while (S.length && heights[S.at(-1)] > heights[i]) {
            const a = heights[S.pop()];
            const b = S.length ? i - S.at(-1) - 1 : i;
            res = Math.max(a * b, res);
        }
        S.push(i);
    }
    return res;
}
