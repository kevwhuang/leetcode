// 2710 - Remove Trailing Zeros From a String

function removeTrailingZeros(num) {
    let pos = num.length;
    while (num[--pos] === '0') { }
    return num.slice(0, pos + 1);
}
