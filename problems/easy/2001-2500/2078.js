// 2078 - Two Furthest Houses With Different Colors

function maxDistance(colors) {
    const first = colors.at(0);
    let i = colors.length - 1;
    while (i > 0) {
        if (colors[i--] !== first) break;
    }
    const last = colors.at(-1);
    let j = 0;
    while (j < colors.length - 1) {
        if (colors[j++] !== last) break;
    }
    return Math.max(i + 1, colors.length - j);
}
