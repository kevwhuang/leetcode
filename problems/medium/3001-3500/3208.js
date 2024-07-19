// 3208 - Alternating Groups II

function numberOfAlternatingGroups(colors, k) {
    let groups = 0, window = 1;
    const len = colors.length;
    for (let i = 0; i < len + k - 2; i++) {
        if (colors[i % len] === colors[(i + 1) % len]) window = 1;
        else if (++window >= k) groups++;
    }
    return groups;
}
