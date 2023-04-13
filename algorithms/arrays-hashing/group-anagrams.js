/**
 * @param {string[]} strs
 * @return {string[][]}
 */

module.exports = function groupAnagrams(strs) {
    const map = {};
    const output = [];
    for (const e of strs) {
        const sorted = e.split('').sort().join('');
        map[sorted] ? map[sorted].push(e) : map[sorted] = [e];
    }
    for (const e in map) output.push(map[e]);
    return output;
}
