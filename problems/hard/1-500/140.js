// 140 - Word Break II

function wordBreak(s, wordDict) {
    function backtrack(i, cur) {
        if (i === n && set.has(cur)) {
            seq.push(cur);
            res.push(seq.join(' '));
            seq.pop();
        }
        if (i === n) return;
        backtrack(i + 1, cur + s[i]);
        if (!set.has(cur)) return;
        seq.push(cur);
        backtrack(i + 1, s[i]);
        seq.pop();
    }
    const res = [], seq = [], n = s.length;
    const set = new Set(wordDict);
    backtrack(1, s[0]);
    return res;
}
