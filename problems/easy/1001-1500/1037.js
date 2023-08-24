// 1037 - Valid Boomerang

function isBoomerang(points) {
    const slope1 = (points[1][1] - points[0][1]) / (points[1][0] - points[0][0]);
    if (isNaN(slope1)) return false;
    const slope2 = (points[2][1] - points[1][1]) / (points[2][0] - points[1][0]);
    if (isNaN(slope2)) return false;
    const slope3 = (points[0][1] - points[2][1]) / (points[0][0] - points[2][0]);
    if (isNaN(slope3)) return false;
    return slope1 !== slope2 && slope2 !== slope3 && slope1 !== slope3;
}
