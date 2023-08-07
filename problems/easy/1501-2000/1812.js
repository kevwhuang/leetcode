// 1812 - Determine Color of a Chessboard Square

function squareIsWhite(coordinates) {
    let num = coordinates.charCodeAt(0) + coordinates[1];
    if ('aceg'.includes(coordinates[0])) num++;
    return num % 2;
}
