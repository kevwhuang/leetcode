// 1668 - Maximum Repeating Substring

function maxRepeating(sequence, word) {
    const len = word.length;
    let kVal = 0;
    for (let i = 0, count; i < sequence.length; i++) {
        if (!sequence.startsWith(word, i)) continue;
        count = 1;
        for (let j = i + len; j < sequence.length; j += len, count++) {
            if (!sequence.startsWith(word, j)) break;
        }
        kVal = Math.max(count, kVal);
    }
    return kVal;
}
