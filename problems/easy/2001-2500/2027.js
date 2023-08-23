// 2027 - Minimum Moves to Convert String

function minimumMoves(s) {
    let moves = 0;
    for (let i = 0; i < s.length;) {
        if (s[i] === 'X') {
            i += 3;
            moves++;
        } else {
            i++;
        }
    }
    return moves;
}
