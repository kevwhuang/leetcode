// 387 - First Unique Character in a String

function firstUniqChar(s) {
    const map = new Map();
    let pos = -1;
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) + 1 || 1);
    }
    for (const e of map.entries()) {
        if (e[1] === 1) {
            pos = s.indexOf(e[0]);
            break;
        }
    }
    return pos;
}
