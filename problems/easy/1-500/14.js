// 14 - Longest Common Prefix

function longestCommonPrefix(strs) {
    let len = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        const min = Math.min(len, strs[i].length);
        let j = 0;
        while (j < min && strs[0][j] === strs[i][j]) j++;
        len = j;
    }
    return strs[0].slice(0, len);
}
