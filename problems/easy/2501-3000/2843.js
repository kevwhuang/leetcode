// 2843 - Count Symmetric Integers

function countSymmetricIntegers(low, high) {
    let count = 0;
    for (let i = low; i <= Math.min(99, high); i++) {
        i % 10 === Math.floor(i / 10) && count++;
    }
    for (let i = Math.max(1000, low), n, n1, n2, n3, n4; i <= high; i++) {
        n1 = i % 10;
        n = Math.floor(i / 10);
        n2 = n % 10;
        n = Math.floor(n / 10);
        n3 = n % 10;
        n4 = Math.floor(n / 10);
        n1 + n2 === n3 + n4 && count++;
    }
    return count;
}
