// 1897 - Redistribute Characters to Make All Strings Equal

function makeEqual(words) {
    const map = new Map(), n = words.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++, count++) {
            map.set(word[j], map.get(word[j]) + 1 || 1);
        }
    }
    if (count % n) return false;
    for (const freq of map.values()) {
        if (freq % n) return false;
    }
    return true;
}
