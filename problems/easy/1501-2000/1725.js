// 1725 - Number of Rectangles That Can Form the Largest Square

function countGoodRectangles(rectangles) {
    let maxLen = 1,
        count = 0;
    for (let i = 0; i < rectangles.length; i++) {
        const max = Math.min(rectangles[i][0], rectangles[i][1]);
        if (max === maxLen) count++;
        else if (max > maxLen) {
            maxLen = max;
            count = 1;
        }
    }
    return count;
}
