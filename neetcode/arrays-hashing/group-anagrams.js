// 49 - Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function groupAnagrams(strs) {
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        const cur = strs[i];
        const bucket = new Array(26).fill(0);
        for (let j = 0; j < cur.length; j++) {
            bucket[cur.charCodeAt(j) - 97]++;
        }
        const key = bucket.join('-');
        if (map.has(key)) map.get(key).push(cur);
        else map.set(key, [cur]);
    }
    return [...map.values()];
}

module.exports = groupAnagrams;
