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
    for (const player of ['AAA', 'BBB']) {
        if (board[0][0] + board[0][1] + board[0][2] === player) return player[0];
        if (board[1][0] + board[1][1] + board[1][2] === player) return player[0];
        if (board[2][0] + board[2][1] + board[2][2] === player) return player[0];
        if (board[0][0] + board[1][0] + board[2][0] === player) return player[0];
        if (board[0][1] + board[1][1] + board[2][1] === player) return player[0];
        if (board[0][2] + board[1][2] + board[2][2] === player) return player[0];
        if (board[0][0] + board[1][1] + board[2][2] === player) return player[0];
        if (board[0][2] + board[1][1] + board[2][0] === player) return player[0];
    }
    return moves.length === 9 ? 'Draw' : 'Pending';
}
