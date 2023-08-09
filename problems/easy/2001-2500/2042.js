// 2042 - Check If Numbers Are Ascending in a Sentence

function areNumbersAscending(s) {
    let previous = 0;
    for (const num of s.matchAll(/[0-9]+/g)) {
        if (previous >= +num[0]) return false;
        previous = +num[0];
    }
    return true;
}
