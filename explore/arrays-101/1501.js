// 1051 - Height Checker

function heightChecker(heights) {
    const ordered = [...heights].sort((a, b) => a - b);
    let mismatched = 0;
    for (let i = 0; i < heights.length; i++) {
        heights[i] !== ordered[i] && mismatched++;
    }
    return mismatched;
}
