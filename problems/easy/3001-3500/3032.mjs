// 3032 - Count Numbers With Unique Digits II

function numberCount(a, b) {
    let count = 0;
    for (let n = a; n <= b; n++) {
        let num = n, digits = 0;
        const set = new Set();
        while (num) {
            set.add(num % 10);
            digits++;
            num = num / 10 >> 0;
        }
        if (digits === set.size) count++;
    }
    return count;
}
