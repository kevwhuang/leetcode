// 49 - Group Anagrams

function groupAnagrams(strs) {
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        const B = new Array(26).fill(0), cur = strs[i];
        for (let j = 0; j < cur.length; j++) {
            B[cur.charCodeAt(j) - 97]++;
        }
        const key = B.join('-');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(cur);
    }
    return [...map.values()];
}
