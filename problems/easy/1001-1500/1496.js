// 1496 - Path Crossing

function isPathCrossing(path) {
    const seen = new Set(['0,0']);
    for (let r = 0, c = 0, i = 0; i < path.length; i++) {
        switch (path[i]) {
            case 'N': r--; break;
            case 'S': r++; break;
            case 'E': c--; break;
            default: c++;
        }
        const key = `${r},${c}`;
        if (seen.has(key)) return true;
        seen.add(key);
    }
    return false;
}
