// 1684 - Count the Number of Consistent Strings

function countConsistentStrings(allowed, words) {
    const set = new Set(allowed);
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        let flag = true;
        for (let j = 0; j < words[i].length; j++) {
            if (set.has(words[i][j])) continue;
            flag = false;
            break;
        }
        if (flag) count++;
    }
    return count;
}
