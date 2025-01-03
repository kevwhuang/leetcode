// 293 - Flip Game

function generatePossibleNextMoves(currentState) {
    const res = [];
    for (let i = 1; i < currentState.length; i++) {
        if (currentState[i - 1] !== '+' || currentState[i] !== '+') continue;
        res.push(`${currentState.slice(0, i - 1)}--${currentState.slice(i + 1)}`);
    }
    return res;
}
