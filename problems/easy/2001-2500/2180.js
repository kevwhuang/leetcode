// 2180 - Count Integers With Even Digit Sum

function countEven(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        const str = i.toString();
        let sum = 0, j = 0;
        while (j < str.length) sum += +str[j++];
        if (sum % 2 === 0) count++;
    }
    return count;
}
