// 2160 - Minimum Sum of Four Digit Number After Splitting Digits

function minimumSum(num) {
    const ordered = String(num).split('').sort();
    return +(ordered[0] + ordered[3]) + +(ordered[1] + ordered[2]);
}
