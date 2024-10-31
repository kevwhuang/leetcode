// 242 - Valid Anagram

function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const B = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        B[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < t.length; i++) {
        if (--B[t.charCodeAt(i) - 97] === -1) return false;
    }
    return B.every(e => e === 0);
}
