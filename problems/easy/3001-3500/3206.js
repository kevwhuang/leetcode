// 3206 - Alternating Groups I

function numberOfAlternatingGroups(colors) {
    let groups = 0;
    const len = colors.length;
    for (let i = 0; i < len; i++) {
        if (colors[i] === colors[(i + 1) % len]) continue;
        if (colors[i] !== colors[(i + 2) % len]) continue;
        groups++;
    }
    return groups;
}
