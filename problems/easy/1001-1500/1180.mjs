// 1180 - Count Substrings With Only One Distinct Letter

function countLetters(s) {
    let pos = 1;
    let window = 1;
    let count = 1;
    while (pos < s.length) {
        if (s[pos] === s[pos - 1]) {
            window++;
            count += window;
        } else {
            window = 1;
            count++;
        }
        pos++;
    }
    return count;
}
