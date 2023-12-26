// 744 - Find Smallest Letter Greater Than Target

function nextGreatestLetter(letters, target) {
    let l = 0, r = letters.length - 1;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        letters[m] <= target ? (l = m + 1) : (r = m - 1);
    }
    return letters[l] || letters[0];
}
