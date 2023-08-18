// 293 - Flip Game

function generatePossibleNextMoves(currentState) {
    const states = [];
    for (let i = 0; i < currentState.length - 1; i++) {
        if (currentState[i] === '+' && currentState[i + 1] === '+') {
            const before = currentState.slice(0, i);
            const after = currentState.slice(i + 2);
            states.push(`${before}--${after}`);
        }
    }
    return states;
}
