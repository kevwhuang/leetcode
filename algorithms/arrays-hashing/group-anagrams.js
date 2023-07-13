/**
 * @param {string[]} strs
 * @return {string[][]}
 */

module.exports = groupAnagrams;

function groupAnagrams(strs) {
    const map = new Map();
    for (const str of strs) {
        const table = Array(26).fill(0);
        for (const letter of str) {
            table[letter.charCodeAt() - 97]++;
        }
        const code = table.join('_');
        map.has(code)
            ? map.set(code, map.get(code).concat(str))
            : map.set(code, [str]);
    }
    return [...map.values()];
}
