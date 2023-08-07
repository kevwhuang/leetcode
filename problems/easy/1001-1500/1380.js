// 1380 - Lucky Numbers in a Matrix

function luckyNumbers(matrix) {
    const maxColumn = new Array(matrix[0].length);
    for (let col = 0; col < matrix[0].length; col++) {
        let max = 0;
        for (let row = 0; row < matrix.length; row++) {
            max = Math.max(matrix[row][col], max);
        }
        maxColumn[col] = max;
    }
    const luckyNumbers = [];
    for (let row = 0; row < matrix.length; row++) {
        let index = 0,
            min = matrix[row][0];
        for (let col = 1; col < matrix[0].length; col++) {
            if (matrix[row][col] < min) {
                index = col;
                min = matrix[row][col];
            }
        }
        matrix[row][index] === maxColumn[index]
            && luckyNumbers.push(matrix[row][index]);
    }
    return luckyNumbers;
}
