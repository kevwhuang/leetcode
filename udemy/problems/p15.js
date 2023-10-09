// 15 - reverse

function reverse(s) {
    if (s.length === 1) return s;
    return reverse(s.slice(1)) + s[0];
}
