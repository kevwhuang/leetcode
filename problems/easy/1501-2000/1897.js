// 1897 - Redistribute Characters to Make All Strings Equal

function makeEqual(words) {
    const len = words.length;
    const map = new Map();
    let count = 0;
    for (let i = 0, word; i < len; i++) {
        word = words[i];
        for (let j = 0; j < word.length; j++, count++) {
            map.set(word[j], map.get(word[j]) + 1 || 1);
        }
    }
    if (count % len) return false;
    for (const freq of map.values()) {
        if (freq % len) return false;
    }
    return true;
}
