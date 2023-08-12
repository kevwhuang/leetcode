// 1779 - Find Nearest Point That Has the Same X or Y Coordinate

function nearestValidPoint(x, y, points) {
    let min = Infinity;
    let index = -1;
    for (let i = 0; i < points.length; i++) {
        const [a, b] = points[i];
        if (a === x || b === y) {
            const manhattan = Math.abs(a - x) + Math.abs(b - y);
            if (manhattan < min) {
                min = manhattan;
                index = i;
            }
        }
    }
    return index;
}
