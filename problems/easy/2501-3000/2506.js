// 2506 - Count Pairs of Similar Strings

function similarPairs(words) {
    for (let i = 0; i < words.length; i++) {
        words[i] = [...new Set(words[i])].sort().join('');
    }
    let pairs = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            words[i] === words[j] && pairs++;
        }
    }
    return pairs;
}
