// 1496 - Path Crossing

function isPathCrossing(path) {
    const set = new Set(['0,0']);
    let [x, y] = [0, 0];
    for (let i = 0; i < path.length; i++) {
        switch (path[i]) {
            case 'N':
                y++;
                break;
            case 'S':
                y--;
                break;
            case 'E':
                x++;
                break;
            case 'W':
                x--;
        }
        const coords = x + ',' + y;
        if (set.has(coords)) return true;
        set.add(coords);
    }
    return false;
}
