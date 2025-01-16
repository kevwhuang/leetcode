// 149 - Max Points on a Line

function maxPoints(points) {
    let res = 0;
    for (let i = 0; i < points.length; i++) {
        const map = new Map(), r = points[i][1], c = points[i][0];
        for (let j = 0; j < points.length; j++) {
            if (i === j) continue;
            const div = (r - points[j][1]) / (c - points[j][0]);
            map.set(div, (map.get(div) ?? 0) + 1);
        }
        res = Math.max(...map.values(), res);
    }
    return res + 1;
}
