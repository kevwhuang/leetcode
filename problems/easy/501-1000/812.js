// 812 - Largest Triangle Area

function largestTriangleArea(points) {
    function computeArea(c1, c2, c3) {
        const term1 = c1[0] * (c2[1] - c3[1]);
        const term2 = c2[0] * (c3[1] - c1[1]);
        const term3 = c3[0] * (c1[1] - c2[1]);
        return Math.abs(term1 + term2 + term3) / 2;
    }
    const len = points.length;
    let area = 0;
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                area = Math.max(computeArea(points[i], points[j], points[k]), area);
            }
        }
    }
    return area;
}
