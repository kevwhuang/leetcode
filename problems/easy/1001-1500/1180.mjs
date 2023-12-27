// 1180 - Count Substrings With Only One Distinct Letter

function countLetters(s) {
    let count = 1, window = 1, i = 0;
    while (++i < s.length) {
        if (s[i] === s[i - 1]) {
            window++;
            count += window;
        } else {
            window = 1;
            count++;
        }
    }
    return count;
}
