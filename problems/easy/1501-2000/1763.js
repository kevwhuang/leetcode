// 1763 - Longest Nice Substring

function longestNiceSubstring(s) {
    if (s.length < 2) return '';
    const arr = s.split('');
    const set = new Set(arr);
    for (let i = 0; i < s.length; i++) {
        if (set.has(arr[i].toLowerCase()) && set.has(arr[i].toUpperCase())) continue;
        const div1 = longestNiceSubstring(s.slice(0, i));
        const div2 = longestNiceSubstring(s.slice(i + 1));
        return div1.length >= div2.length ? div1 : div2;
    }
    return s;
}
