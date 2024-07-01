// 3200 - Maximum Height of a Triangle

function maxHeightOfTriangle(red, blue) {
    function count(a, b) {
        let rows = 1, cur = true;
        while (true) {
            if (cur) {
                if (a < rows) break;
                a -= rows++;
                cur = false;
            } else {
                if (b < rows) break;
                b -= rows++;
                cur = true;
            }
        }
        return rows - 1;
    }
    return Math.max(count(red, blue), count(blue, red));
}
