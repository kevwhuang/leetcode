// 2013 - Detect Squares

class DetectSquares {
    constructor() {
        this.points = new Map();
    }
    add(point) {
        const [x, y] = point;
        if (!this.points.has(x)) this.points.set(x, new Map([[y, 1]]));
        else this.points.get(x).set(y, this.points.get(x).get(y) + 1 || 1);
    }
    count(point) {
        const [x, y] = point;
        if (!this.points.has(x)) return 0;
        let total = 0;
        for (const [yy, freq1] of this.points.get(x)) {
            if (y === yy) continue;
            const delta = y - yy;
            const freq2_1 = this.points.get(x + delta)?.get(y) || 0;
            const freq2_2 = this.points.get(x - delta)?.get(y) || 0;
            let freq3_1 = 0, freq3_2 = 0;
            if (freq2_1) freq3_1 = this.points.get(x + delta)?.get(yy) || 0;
            if (freq2_2) freq3_2 = this.points.get(x - delta)?.get(yy) || 0;
            total += freq1 * (freq2_1 * freq3_1 + freq2_2 * freq3_2);
        }
        return total;
    }
}
