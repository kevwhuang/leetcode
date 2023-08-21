// 243 - Shortest Word Distance

function shortestDistance(wordsDict, word1, word2) {
    let lastSeen1;
    let lastSeen2;
    let min = Infinity;
    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            lastSeen1 = i;
            if (lastSeen2 > -1) min = Math.min(i - lastSeen2, min);
        } else if (wordsDict[i] === word2) {
            lastSeen2 = i;
            if (lastSeen1 > -1) min = Math.min(i - lastSeen1, min);
        }
    }
    return min;
}
