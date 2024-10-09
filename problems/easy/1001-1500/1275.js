// 1275 - Find Winner on a Tic Tac Toe Game

function tictactoe(moves) {
    if (moves.length < 5) return 'Pending';
    const board = [['', '', ''], ['', '', ''], ['', '', '']];
    for (let i = 0; i < moves.length; i += 2) {
        board[moves[i][0]][moves[i][1]] = 'A';
    }
    for (let i = 1; i < moves.length; i += 2) {
        board[moves[i][0]][moves[i][1]] = 'B';
    }
    const M = board;
    for (const player of ['AAA', 'BBB']) {
        if (M[0][0] + M[0][1] + M[0][2] === player) return player[0];
        if (M[1][0] + M[1][1] + M[1][2] === player) return player[0];
        if (M[2][0] + M[2][1] + M[2][2] === player) return player[0];
        if (M[0][0] + M[1][0] + M[2][0] === player) return player[0];
        if (M[0][1] + M[1][1] + M[2][1] === player) return player[0];
        if (M[0][2] + M[1][2] + M[2][2] === player) return player[0];
        if (M[0][0] + M[1][1] + M[2][2] === player) return player[0];
        if (M[0][2] + M[1][1] + M[2][0] === player) return player[0];
    }
    return moves.length === 9 ? 'Draw' : 'Pending';
}
