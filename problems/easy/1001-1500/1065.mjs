// 1065 - Index Pairs of a String

function indexPairs(text, words) {
    const pairs = [];
    for (let i = 0; i < text.length; i++) {
        for (let j = 0, cur; j < words.length; j++) {
            cur = words[j];
            text.startsWith(cur, i) && pairs.push([i, i + cur.length - 1]);
        }
    }
    return pairs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
}
