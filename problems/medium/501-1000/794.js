// 794 - Valid Tic-Tac-Toe State

function validTicTacToe(board) {
    function checkWin($) {
        if (board[0][0] === $ && board[0][1] === $ && board[0][2] === $) return true;
        if (board[1][0] === $ && board[1][1] === $ && board[1][2] === $) return true;
        if (board[2][0] === $ && board[2][1] === $ && board[2][2] === $) return true;
        if (board[0][0] === $ && board[1][0] === $ && board[2][0] === $) return true;
        if (board[0][1] === $ && board[1][1] === $ && board[2][1] === $) return true;
        if (board[0][2] === $ && board[1][2] === $ && board[2][2] === $) return true;
        if (board[0][0] === $ && board[1][1] === $ && board[2][2] === $) return true;
        if (board[0][2] === $ && board[1][1] === $ && board[2][0] === $) return true;
        return false;
    }
    let xCount = 0, oCount = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 'X') xCount++;
            else if (board[i][j] === 'O') oCount++;
        }
    }
    const xWinner = checkWin('X'), oWinner = checkWin('O');
    if (!xWinner && !oWinner && xCount !== oCount && xCount - 1 !== oCount) return false;
    if (xWinner && oWinner) return false;
    if (xWinner && xCount - 1 !== oCount) return false;
    if (oWinner && xCount !== oCount) return false;
    return true;
}
