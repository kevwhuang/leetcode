// 1232 - Check If It Is a Straight Line

function checkStraightLine(coordinates) {
    const x0 = coordinates[0][0];
    const y0 = coordinates[0][1];
    const dx = coordinates[1][0] - x0;
    const dy = coordinates[1][1] - y0;
    for (let i = 2, xx, yy; i < coordinates.length; i++) {
        xx = coordinates[i][0];
        yy = coordinates[i][1];
        if (dy * (xx - x0) !== dx * (yy - y0)) return false;
    }
    return true;
}
