// 2950 - Number of Divisible Substrings

function countDivisibleSubstrings(word) {
    let substrings = 0;
    const arr = [
        1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5,
        6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9,
    ];
    const len = word.length;
    for (let i = 0; i < len; i++) {
        let sum = 0;
        for (let j = i; j < len; j++) {
            sum += arr[word.charCodeAt(j) - 97];
            if (sum % (j - i + 1) === 0) substrings++;
        }
    }
    return substrings;
}
