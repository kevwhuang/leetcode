/**
 * @param {number[]} matrix
 * @return {number[]}
 */

module.exports = function spiralOrder(matrix) {
    const order = [];
    let dir = 'e';
    while (true) {
        console.log(dir, matrix)
        switch (dir) {
            case 'e':
                for (const e of matrix[0]) {
                    order.push(e);
                }
                matrix.shift();
                dir = 's';
                break;
            case 's':
                for (let i = 0; i < matrix.length; i++) {
                    order.push(matrix[i][matrix[matrix.length - 1].length - 1]);
                    matrix[i].pop();
                }
                dir = 'w';
                break;
            case 'w':
                for (let i = matrix[0].length - 1; i >= 0; i--) {
                    order.push(matrix[matrix.length - 1][i]);
                }
                matrix.pop();
                dir = 'n';
                break;
            case 'n':
                for (let i = matrix.length - 1; i >= 0; i--) {
                    order.push(matrix[i][0]);
                    matrix[i].shift();
                }
                dir = 'e';
                break;
        }
        if (!matrix.length) break;
    }
    return order.filter(e => e !== undefined);
};
