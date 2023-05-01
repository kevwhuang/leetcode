module.exports = class DetectSquares {
    /**
     * @param {Map} points
     */

    constructor() {
        this.points = new Map();
    }

    /**
     * @param {number[]} point
     * @return {void}
     */

    add(point) {
        const pt = point.toString();
        const current = this.points.get(pt);
        current ? this.points.set(pt, current + 1) : this.points.set(pt, 1);
    }

    /**
     * @param {number[]} point
     * @return {number}
     */

    count(point) {
        const matchX = new Map();
        const matchY = new Map();
        const qx = point[0];
        const qy = point[1];
        let count = 0;
        for (const e of this.points.keys()) {
            const [px, py] = e.split(',');
            let n = this.points.get(e);
            if (px == qx && py == qy) continue;
            if (px == qx) matchX.set(+py, n);
            else if (py == qy) matchY.set(+px, n);
        }
        for (const e of matchX.keys()) {
            const x1 = qx + qy - e;
            const x2 = qx - (qy - e);
            const countX1 = matchY.get(x1);
            if (countX1) {
                const check = this.points.get(`${x1},${e}`);
                if (check) count += check * countX1 * matchX.get(e);
            }
            const countX2 = matchY.get(x2);
            if (countX2) {
                const check = this.points.get(`${x2},${e}`);
                if (check) count += check * countX2 * matchX.get(e);
            }
        }
        return count;
    }
};
