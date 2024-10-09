// 794 - Valid Tic Tac Toe State

function validTicTacToe(board) {
    function checkWin($) {
        if (M[0][0] === $ && M[0][1] === $ && M[0][2] === $) return true;
        if (M[1][0] === $ && M[1][1] === $ && M[1][2] === $) return true;
        if (M[2][0] === $ && M[2][1] === $ && M[2][2] === $) return true;
        if (M[0][0] === $ && M[1][0] === $ && M[2][0] === $) return true;
        if (M[0][1] === $ && M[1][1] === $ && M[2][1] === $) return true;
        if (M[0][2] === $ && M[1][2] === $ && M[2][2] === $) return true;
        if (M[0][0] === $ && M[1][1] === $ && M[2][2] === $) return true;
        if (M[0][2] === $ && M[1][1] === $ && M[2][0] === $) return true;
        return false;
    }
    let xCount = 0, oCount = 0;
    const M = board;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (M[i][j] === 'X') xCount++;
            else if (M[i][j] === 'O') oCount++;
        }
    }
    const xWinner = checkWin('X'), oWinner = checkWin('O');
    if (!xWinner && !oWinner && xCount !== oCount && xCount - 1 !== oCount) return false;
    if (xWinner && oWinner) return false;
    if (xWinner && xCount - 1 !== oCount) return false;
    if (oWinner && xCount !== oCount) return false;
    return true;
}
