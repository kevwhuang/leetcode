// 2094 - Finding 3-Digit Even Numbers

function findEvenNumbers(digits) {
    const freq = new Array(10).fill(0);
    for (let i = 0; i < digits.length; i++) {
        freq[digits[i]]++;
    }
    const res = [];
    for (let i = 1; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            for (let k = 0; k <= 8; k += 2) {
                freq[i]--, freq[j]--, freq[k]--;
                if (freq[i] >= 0 && freq[j] >= 0 && freq[k] >= 0) {
                    res.push(Number('' + i + j + k));
                }
                freq[i]++, freq[j]++, freq[k]++;
            }
        }
    }
    return res;
}
