// 2520 - Count the Digits That Divide a Number

function countDigits(num) {
    const str = String(num);
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        num % str[i] === 0 && count++;
    }
    return count;
}
