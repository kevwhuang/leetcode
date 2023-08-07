// 1684 - Count the Number of Consistent Strings

function countConsistentStrings(allowed, words) {
    const set = new Set(allowed);
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        let isConsistent = true;
        for (let j = 0; j < words[i].length; j++) {
            if (!set.has(words[i][j])) {
                isConsistent = false;
                break;
            }
        }
        isConsistent && count++;
    }
    return count;
}
