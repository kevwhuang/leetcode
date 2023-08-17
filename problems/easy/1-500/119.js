// 119 - Pascal's Triangle II

function getRow(rowIndex) {
    let row = [1];
    while (rowIndex--) {
        const current = [1];
        for (let i = 0; i < row.length - 1; i++) {
            current.push(row[i] + row[i + 1]);
        }
        current.push(1);
        row = current;
    }
    return row;
}
