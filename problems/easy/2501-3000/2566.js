// 2566 - Maximum Difference by Remapping a Digit

function minMaxDifference(num) {
    num = num.toString();
    let maxDigit;
    for (let i = 0; i < num.length; i++) {
        if (num[i] == 9) continue;
        maxDigit = num[i];
        break;
    }
    return num.replaceAll(maxDigit, 9) - num.replaceAll(num[0], 0);
}
