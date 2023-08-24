// 2259 - Remove Digit From Number to Maximize Result

function removeDigit(number, digit) {
    let lastIndex;
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            lastIndex = i;
            if (number[i + 1] > digit) {
                return number.slice(0, i) + number.slice(i + 1);
            }
        }
    }
    return number.slice(0, lastIndex) + number.slice(lastIndex + 1);
}
