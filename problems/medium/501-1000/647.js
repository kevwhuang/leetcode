// 647 - Palindromic Substrings

function countSubstrings(s) {
    let substrings = 0;
    for (let i = 0; i < s.length; i++) {
        let l = i, r = i;
        while (~l && r < s.length && s[l--] === s[r++]) substrings++;
        l = i, r = i + 1;
        while (~l && r < s.length && s[l--] === s[r++]) substrings++;
    }
    return substrings;
}
