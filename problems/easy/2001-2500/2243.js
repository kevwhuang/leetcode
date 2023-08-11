// 2243 - Calculate Digit Sum of a String

function digitSum(s, k) {
    while (s.length > k) {
        let round = '';
        for (let i = 0; i < s.length; i += k) {
            const group = s.slice(i, i + k);
            let sum = 0;
            for (let j = 0; j < group.length; j++) {
                sum += +group[j];
            }
            round += sum;
        }
        s = round;
    }
    return s;
}
