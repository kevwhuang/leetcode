// 14 - Longest Common Prefix

function longestCommonPrefix(strs) {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        const str = strs[i];
        if (!str.length) return '';
        for (let j = 0; j < str.length; j++) {
            if (str[j] !== prefix[j]) {
                prefix = prefix.slice(0, j);
                break;
            }
            if (j === str.length - 1) prefix = str;
        }
    }
    return prefix;
}
