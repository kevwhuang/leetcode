// 1816 - Truncate Sentence

function truncateSentence(s, k) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ' && ++count === k) return s.slice(0, i);
    }
    return s;
}
