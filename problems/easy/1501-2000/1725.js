// 1725 - Number of Rectangles That Can Form the Largest Square

function countGoodRectangles(rectangles) {
    let count = 0, max = 1;
    for (let i = 0; i < rectangles.length; i++) {
        const min = Math.min(...rectangles[i]);
        if (min > max) count = 1, max = min;
        else if (min === max) count++;
    }
    return count;
}
