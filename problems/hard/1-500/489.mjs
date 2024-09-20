// 489 - Robot Room Cleaner

function cleanRoom(robot) {
    function backtrack(r, c, dir) {
        if (seen.has(r) && seen.get(r).has(c)) return;
        if (!seen.has(r)) seen.set(r, new Set());
        seen.get(r).add(c);
        robot.clean();
        for (let n = 1; n <= 4; n++) {
            if (robot.move()) {
                backtrack(r + d[dir][0], c + d[dir][1], dir);
                robot.turnLeft();
                robot.turnLeft();
                robot.move();
                robot.turnLeft();
                robot.turnLeft();
            }
            robot.turnLeft();
            dir = (dir + 1) % 4;
        }
    }
    const seen = new Map();
    const d = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    backtrack(0, 0, 0);
}
