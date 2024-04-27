// 14 - Longest Common Prefix

function longestCommonPrefix(strs) {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < prefix.length) prefix = strs[i];
    }
    if (prefix.length === 0) return '';
    L: while (prefix.length) {
        for (let i = 0; i < strs.length; i++) {
            if (strs[i].startsWith(prefix)) continue;
            prefix = prefix.slice(0, prefix.length - 1);
            continue L;
        }
        break;
    }
    return prefix;
}
