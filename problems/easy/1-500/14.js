// 14 - Longest Common Prefix

function longestCommonPrefix(strs) {
    let i = 0, j = strs[0].length;
    while (++i < strs.length) {
        const min = Math.min(j, strs[i].length);
        j = 0;
        while (j < min && strs[0][j] === strs[i][j]) j++;
    }
    return strs[0].slice(0, j);
}
