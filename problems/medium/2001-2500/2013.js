// 2013 - Detect Squares

class DetectSquares {
    constructor() {
        this.points = new Map();
    }
    add(point) {
        const points = this.points, x = point[0], y = point[1];
        if (!points.has(x)) points.set(x, new Map());
        points.get(x).set(y, (points.get(x).get(y) ?? 0) + 1);
    }
    count(point) {
        const points = this.points, x = point[0], y = point[1];
        if (!this.points.has(x)) return 0;
        let ways = 0;
        for (const yy of points.get(x).keys()) {
            if (y === yy) continue;
            let f2_1 = 0, f2_2 = 0, f3_1 = 0, f3_2 = 0;
            const xx1 = x + y - yy, xx2 = x + yy - y;
            if (points.has(xx1)) f2_1 = points.get(xx1).get(y) ?? 0;
            if (points.has(xx2)) f2_2 = points.get(xx2).get(y) ?? 0;
            if (f2_1 && points.has(xx1)) f3_1 = points.get(xx1).get(yy) ?? 0;
            if (f2_2 && points.has(xx2)) f3_2 = points.get(xx2).get(yy) ?? 0;
            ways += points.get(x).get(yy) * (f2_1 * f3_1 + f2_2 * f3_2);
        }
        return ways;
    }
}
