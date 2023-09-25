// 2864 - Maximum Odd Binary Number

function maximumOddBinaryNumber(s) {
    let ones = -1;
    for (let i = 0; i < s.length; i++) {
        s[i] === '1' && ones++;
    }
    let res = '1'.repeat(ones);
    res += '0'.repeat(s.length - ones - 1);
    return res.concat('1');
}
