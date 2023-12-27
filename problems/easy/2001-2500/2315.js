// 2315 - Count Asterisks

function countAsterisks(s) {
    let count = 0, isBetween = false;
    for (let i = 0; i < s.length; i++) {
        if (!isBetween && s[i] === '*') count++;
        else if (s[i] === '|') isBetween = !isBetween;
    }
    return count;
}
