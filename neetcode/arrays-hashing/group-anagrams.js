// 49 - Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function groupAnagrams(strs) {
    const map = new Map();
    for (let i = 0, cur; i < strs.length; i++) {
        const freqs = new Array(26).fill(0);
        cur = strs[i];
        for (let j = 0; j < cur.length; j++) {
            freqs[cur.charCodeAt(j) - 97]++;
        }
        const code = freqs.join('_');
        map.has(code)
            ? map.set(code, map.get(code).concat(cur))
            : map.set(code, [cur]);
    }
    return [...map.values()];
}

module.exports = groupAnagrams;
