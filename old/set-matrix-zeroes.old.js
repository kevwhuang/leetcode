/**
 * @param {number[][]} matrix
 * @return {void}
 */

module.exports = function setZeroes(matrix) {
    const HEIGHT = matrix.length;
    const LENGTH = matrix[0].length;
    const colZeroIndices = [];
    for (let row = 0; row < HEIGHT; row++) {
        let rowHasZero = false;
        for (let col = 0; col < LENGTH; col++) {
            if (!matrix[row][col]) {
                rowHasZero = true;
                colZeroIndices.push(col);
            }
        }
        if (rowHasZero) {
            for (let col = 0; col < LENGTH; col++) {
                matrix[row][col] = 0;
            }
        }
    }
    for (let row = 0; row < HEIGHT; row++) {
        for (let col = 0; col < LENGTH; col++) {
            if (colZeroIndices.includes(col)) {
                matrix[row][col] = 0;
            }
        }
    }
    return matrix;
};
