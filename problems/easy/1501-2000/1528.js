// 1528 - Shuffle String

function restoreString(s, indices) {
    const shuffled = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
        shuffled[indices[i]] = s[i];
    }
    return shuffled.join('');
}
