// 1725 - Number of Rectangles That Can Form the Largest Square

function countGoodRectangles(rectangles) {
    let count = 0, maxLen = 1;
    for (let i = 0; i < rectangles.length; i++) {
        const max = Math.min(...rectangles[i]);
        if (max === maxLen) count++;
        else if (max > maxLen) {
            count = 1;
            maxLen = max;
        }
    }
    return count;
}
