// 1805 - Number of Different Integers in a String

function numDifferentIntegers(word) {
    const set = new Set();
    word = word.replaceAll(/[a-z]+/g, ' ')
        .trim()
        .split(' ');
    if (word[0] === '') return 0;
    word.forEach(num => set.add(BigInt(num)));
    return set.size;
}
