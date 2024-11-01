// 49 - Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function groupAnagrams(strs) {
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        const B = new Array(26).fill(0), s = strs[i];
        for (let j = 0; j < s.length; j++) {
            B[s.charCodeAt(j) - 97]++;
        }
        const key = B.join('-');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(s);
    }
    return [...map.values()];
}

module.exports = groupAnagrams;
