// 492 - Construct the Rectangle

function constructRectangle(area) {
    let width = Math.floor(Math.sqrt(area));
    while (true) {
        if (area % width === 0) return [area / width, width];
        width--;
    }
}
