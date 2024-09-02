// 391 - Perfect Rectangle

function isRectangleCover(rectangles) {
    const add = point => set.has(point) ? set.delete(point) : set.add(point);
    let area = 0;
    let xMin = Infinity, xMax = -Infinity;
    let yMin = Infinity, yMax = -Infinity;
    const set = new Set();
    for (let i = 0; i < rectangles.length; i++) {
        const x1 = rectangles[i][0], x2 = rectangles[i][2];
        const y1 = rectangles[i][1], y2 = rectangles[i][3];
        area += (x2 - x1) * (y2 - y1);
        xMin = Math.min(x1, xMin), xMax = Math.max(x2, xMax);
        yMin = Math.min(y1, yMin), yMax = Math.max(y2, yMax);
        add(`${x1}-${y1}`);
        add(`${x1}-${y2}`);
        add(`${x2}-${y1}`);
        add(`${x2}-${y2}`);
    }
    if (area !== (xMax - xMin) * (yMax - yMin)) return false;
    if (set.size !== 4) return false;
    if (!set.has(`${xMin}-${yMin}`)) return false;
    if (!set.has(`${xMin}-${yMax}`)) return false;
    if (!set.has(`${xMax}-${yMin}`)) return false;
    if (!set.has(`${xMax}-${yMax}`)) return false;
    return true;
}
