// 118 - Pascal's Triangle

function generate(numRows) {
    const triangle = [[1]];
    while (--numRows) {
        const row = [1], prev = triangle.at(-1);
        for (let i = 0; i < prev.length - 1; i++) {
            row.push(prev[i] + prev[i + 1]);
        }
        row.push(1);
        triangle.push(row);
    }
    return triangle;
}
