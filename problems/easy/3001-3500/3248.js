// 3248 - Snake in Matrix

function finalPositionOfSnake(n, commands) {
    let cell = 0;
    const dict = { UP: -n, DOWN: n, LEFT: -1, RIGHT: 1 };
    commands.forEach(e => cell += dict[e]);
    return cell;
}
