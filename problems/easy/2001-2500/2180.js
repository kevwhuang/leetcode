// 2180 - Count Integers With Even Digit Sum

function countEven(num) {
    let count = 0;
    let j = 0;
    for (let i = 1; i <= num; i++) {
        const str = i.toString();
        let sum = 0;
        for (; j < str.length; j++) {
            sum += +str[j];
        }
        sum % 2 === 0 && count++;
        j = 0;
    }
    return count;
}
