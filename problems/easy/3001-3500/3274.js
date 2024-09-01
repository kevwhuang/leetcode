// 3274 - Check If Two Chessboard Squares Have the Same Color

function checkTwoChessboards(coordinate1, coordinate2) {
    const color = str => (str.charCodeAt(0) + Number(str[1])) % 2;
    return color(coordinate1) === color(coordinate2);
}
