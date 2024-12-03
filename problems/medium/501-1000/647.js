// 647 - Palindromic Substrings

function countSubstrings(s) {
    let res = 0;
    for (let l, r, i = 0; i < s.length; i++) {
        l = i, r = i;
        while (~l && r < s.length && s[l--] === s[r++]) res++;
        l = i, r = i + 1;
        while (~l && r < s.length && s[l--] === s[r++]) res++;
    }
    return res;
}
