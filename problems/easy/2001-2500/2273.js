// 2273 - Find Resultant Array After Removing Anagrams

function removeAnagrams(words) {
    const res = [];
    for (let i = 0, cur, prev; i < words.length; i++) {
        cur = words[i].split('').sort().join('');
        if (cur !== prev) {
            prev = cur;
            res.push(words[i]);
        }
    }
    return res;
}
