// 1030 - Matrix Cells in Distance Order

function allCellsDistOrder(rows, cols, rCenter, cCenter) {
    const obj = {};
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const distance = Math.abs(i - rCenter) + Math.abs(j - cCenter);
            if (obj[distance]) obj[distance].push([i, j]);
            else obj[distance] = [[i, j]];
        }
    }
    const res = [];
    for (const key in obj) {
        const coords = obj[key];
        for (let i = 0; i < coords.length; i++) {
            res.push(coords[i]);
        }
    }
    return res;
}
