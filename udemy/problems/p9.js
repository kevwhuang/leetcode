// 9 - Sliding Window - findLongestSubstring

function findLongestSubstring(str) {
    const set = new Set();
    let max = 0;
    for (let l = 0, r = 0; r < str.length; r++) {
        while (set.has(str[r])) set.delete(str[l++]);
        set.add(str[r]);
        max = Math.max(set.size, max);
    }
    return max;
}
