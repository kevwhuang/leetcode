// 240 - Search a 2D Matrix II

function searchMatrix(matrix, target) {
    let l = 0, c = matrix[0].length - 1;
    while (l <= c) {
        const m = (l + c) / 2 >> 0;
        if (matrix[0][m] < target) l = m + 1;
        else if (matrix[0][m] > target) c = m - 1;
        else return true;
    }
    l = 0;
    let bound = matrix.length - 1;
    while (l <= bound) {
        const m = (l + bound) / 2 >> 0;
        if (matrix[m][0] < target) l = m + 1;
        else if (matrix[m][0] > target) bound = m - 1;
        else return true;
    }
    let r = 0;
    while (r <= bound && c >= 0) {
        if (matrix[r][c] < target) r++;
        else if (matrix[r][c] > target) c--;
        else return true;
    }
    return false;
}
