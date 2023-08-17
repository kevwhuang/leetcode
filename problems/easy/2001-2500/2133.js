// 2133 - Check if Every Row and Column Contains All Numbers

function checkValid(matrix) {
    const height = matrix.length;
    const width = matrix[0].length;
    for (let i = 0; i < height; i++) {
        const set = new Set(matrix[i]);
        if (set.size !== height) return false;
    }
    for (let j = 0; j < width; j++) {
        const set = new Set();
        for (let i = 0; i < height; i++) {
            set.add(matrix[i][j]);
        }
        if (set.size !== width) return false;
    }
    return true;
}
