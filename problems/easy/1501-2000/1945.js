// 1945 - Sum of Digits of String After Convert

function getLucky(s, k) {
    let convert = '';
    for (let i = 0; i < s.length; i++) {
        convert += s.charCodeAt(i) - 96;
    }
    while (k--) {
        let sum = 0;
        for (let i = 0; i < convert.length; i++) {
            sum += +convert[i];
        }
        convert = String(sum);
    }
    return +convert;
}
