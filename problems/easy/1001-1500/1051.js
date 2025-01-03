// 1051 - Height Checker

function heightChecker(heights) {
    let res = 0;
    const sorted = heights.toSorted((a, b) => a - b);
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sorted[i]) res++;
    }
    return res;
}
