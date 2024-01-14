// 304 - Range Sum Query 2D - Immutable

class NumMatrix {
    constructor(matrix) {
        this.matrix = matrix;
        this.m = matrix.length;
        this.n = matrix[0].length;
        for (let r = 1; r < this.m; r++) {
            matrix[r][0] += matrix[r - 1][0];
        }
        for (let c = 1; c < this.n; c++) {
            matrix[0][c] += matrix[0][c - 1];
        }
        for (let r = 1; r < this.m; r++) {
            for (let c = 1; c < this.n; c++) {
                matrix[r][c] += matrix[r][c - 1];
                matrix[r][c] += matrix[r - 1][c];
                matrix[r][c] -= matrix[r - 1][c - 1];
            }
        }
    }
    sumRegion(row1, col1, row2, col2) {
        return this.matrix[row2][col2]
            + (this.matrix[row1 - 1]?.[col1 - 1] ?? 0)
            - (this.matrix[row1 - 1]?.[col2] ?? 0)
            - (this.matrix[row2]?.[col1 - 1] ?? 0);
    }
}
