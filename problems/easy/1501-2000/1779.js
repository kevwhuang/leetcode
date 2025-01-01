// 1779 - Find Nearest Point That Has the Same X or Y Coordinate

function nearestValidPoint(x, y, points) {
    let idx = -1, min = Infinity;
    for (let i = 0; i < points.length; i++) {
        const a = points[i][0], b = points[i][1];
        if (a !== x && b !== y) continue;
        const dist = Math.abs(a - x) + Math.abs(b - y);
        if (dist < min) idx = i, min = dist;
    }
    return idx;
}
