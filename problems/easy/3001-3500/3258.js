// 3258 - Count Substrings That Satisfy K-Constraint I

function countKConstraintSubstrings(s, k) {
    let substrings = 0;
    for (let i = 0; i < s.length; i++) {
        let zeros = 0, ones = 0;
        for (let j = i; j < s.length; j++) {
            s[j] === '0' ? zeros++ : ones++;
            if (zeros > k && ones > k) continue;
            substrings++;
        }
    }
    return substrings;
}
