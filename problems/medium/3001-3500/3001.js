// 3001 - Minimum Moves to Capture the Queen

function minMovesToCaptureTheQueen(a, b, c, d, e, f) {
    for (let row = e - 1, col = f; row >= 1; row--) {
        if (row === a && col === b) return 1;
        if (row === c && col === d) break;
    }
    for (let row = e + 1, col = f; row <= 8; row++) {
        if (row === a && col === b) return 1;
        if (row === c && col === d) break;
    }
    for (let row = e, col = f - 1; col >= 1; col--) {
        if (row === a && col === b) return 1;
        if (row === c && col === d) break;
    }
    for (let row = e, col = f + 1; col <= 8; col++) {
        if (row === a && col === b) return 1;
        if (row === c && col === d) break;
    }
    for (let row = e - 1, col = f - 1; row >= 1 && col >= 1; row--, col--) {
        if (row === a && col === b) break;
        if (row === c && col === d) return 1;
    }
    for (let row = e - 1, col = f + 1; row >= 1 && col <= 8; row--, col++) {
        if (row === a && col === b) break;
        if (row === c && col === d) return 1;
    }
    for (let row = e + 1, col = f - 1; row <= 8 && col >= 1; row++, col--) {
        if (row === a && col === b) break;
        if (row === c && col === d) return 1;
    }
    for (let row = e + 1, col = f + 1; row <= 8 && col <= 8; row++, col++) {
        if (row === a && col === b) break;
        if (row === c && col === d) return 1;
    }
    return 2;
}
