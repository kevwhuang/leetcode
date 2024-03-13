// 54 - Spiral Matrix

function spiralOrder(matrix) {
    const size = matrix.length * matrix[0].length;
    const res = [];
    let row = 0, col = 0;
    let left = 0, top = 1, right = matrix[0].length, bottom = matrix.length;
    while (true) {
        while (true) {
            res.push(matrix[row][col]);
            if (res.length === size) return res;
            if (col + 1 === right) {
                row++;
                right--;
                break;
            }
            col++;
        }
        while (true) {
            res.push(matrix[row][col]);
            if (res.length === size) return res;
            if (row + 1 === bottom) {
                col--;
                bottom--;
                break;
            }
            row++;
        }
        while (true) {
            res.push(matrix[row][col]);
            if (res.length === size) return res;
            if (col === left) {
                row--;
                left++;
                break;
            }
            col--;
        }
        while (true) {
            res.push(matrix[row][col]);
            if (res.length === size) return res;
            if (row === top) {
                col++;
                top++;
                break;
            }
            row--;
        }
    }
}
