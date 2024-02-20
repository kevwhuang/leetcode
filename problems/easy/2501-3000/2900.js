// 2900 - Longest Unequal Adjacent Groups Subsequence I

function getLongestSubsequence(words, groups) {
    const subsequence = [words[0]];
    let cur = groups[0];
    for (let i = 1; i < words.length; i++) {
        if (groups[i] == cur) continue;
        subsequence.push(words[i]);
        cur = !cur;
    }
    return subsequence;
}
