// 3329 - Count Substrings With K-Frequency Characters II

function numberOfSubstrings(s, k) {
    let substrings = 0;
    const B = new Array(26).fill(0);
    for (let l = 0, r = 0; r < s.length; r++) {
        B[s.charCodeAt(r) - 97]++;
        while (B.some(e => e >= k)) B[s.charCodeAt(l++) - 97]--;
        substrings += l;
    }
    return substrings;
}
