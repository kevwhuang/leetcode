// 12 - Integer to Roman

function intToRoman(num) {
    const dict = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
    ];
    let roman = '', i = 0;
    while (num) {
        if (dict[i][0] <= num) {
            num -= dict[i][0];
            roman += dict[i][1];
        } else {
            i++;
        }
    }
    return roman;
}
