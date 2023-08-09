// 498 - Diagonal Traverse

function findDiagonalOrder(mat) {
    const size = mat.length * mat[0].length;
    const output = [];
    let [row, col, dir] = [0, 0, 'NE'];
    while (true) {
        if (output.length === size) return output;
        while (dir === 'NE') {
            output.push(mat[row][col]);
            if (col + 1 === mat[0].length) {
                row++;
                dir = 'SW';
            } else if (row < 1) {
                col++;
                dir = 'SW';
            } else {
                row--;
                col++;
            }
        }
        if (output.length === size) return output;
        while (dir === 'SW') {
            output.push(mat[row][col]);
            if (row + 1 === mat.length) {
                col++;
                dir = 'NE';
            } else if (col < 1) {
                row++;
                dir = 'NE';
            } else {
                row++;
                col--;
            }
        }
    }
}
