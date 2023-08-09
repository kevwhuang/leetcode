// 54 - Spiral Matrix

/**
 * @param {number[]} matrix
 * @return {number[]}
 */

function spiralOrder(matrix) {
    const size = matrix.length * matrix[0].length;
    const output = [];
    let [row, col] = [0, 0],
        [top, right, bottom, left] = [1, matrix[0].length, matrix.length, 0];
    while (true) {
        while (true) {
            output.push(matrix[row][col]);
            if (output.length === size) return output;
            if (col + 1 === right) {
                row++;
                right--;
                break;
            }
            col++;
        }
        while (true) {
            output.push(matrix[row][col]);
            if (output.length === size) return output;
            if (row + 1 === bottom) {
                col--;
                bottom--;
                break;
            }
            row++;
        }
        while (true) {
            output.push(matrix[row][col]);
            if (output.length === size) return output;
            if (col === left) {
                row--;
                left++;
                break;
            }
            col--;
        }
        while (true) {
            output.push(matrix[row][col]);
            if (output.length === size) return output;
            if (row === top) {
                col++;
                top++;
                break;
            }
            row--;
        }
    }
}

module.exports = spiralOrder;
