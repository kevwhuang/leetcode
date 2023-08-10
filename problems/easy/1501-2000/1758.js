// 1758 - Minimum Changes to Make Alternating Binary String

function minOperations(s) {
    let count0 = 0,
        count1 = 0;
    for (let i = 0; i < s.length; i++) {
        if (i % 2) s[i] == 0 ? count0++ : count1++;
        else s[i] == 0 ? count1++ : count0++;
    }
    return Math.min(count0, count1);
}
