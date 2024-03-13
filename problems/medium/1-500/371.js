// 371 - Sum of Two Integers

function getSum(a, b) {
    let carry;
    while (b) {
        carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a;
}
