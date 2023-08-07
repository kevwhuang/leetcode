// 2744 - Find Maximum Number of String Pairs

function maximumNumberOfStringPairs(words) {
    const set = new Set();
    let pairs = 0;
    for (let i = 0; i < words.length; i++) {
        const reverse = words[i][1] + words[i][0];
        if (set.has(reverse)) {
            set.delete(reverse);
            pairs++;
        } else {
            set.add(words[i]);
        }
    }
    return pairs;
}
