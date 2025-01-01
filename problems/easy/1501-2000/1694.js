// 1694 - Reformat Phone Number

function reformatNumber(number) {
    number = number.replace(/[ -]/g, '');
    let res = '', i = 0;
    while (true) {
        const rem = number.length - i;
        if (rem === 2 || rem === 3) res += number.slice(i);
        else if (rem === 4) res += number.slice(i, i + 2) + '-' + number.slice(i + 2);
        if (rem === 2 || rem === 3 || rem === 4) break;
        res += number.slice(i, i + 3) + '-';
        i += 3;
    }
    return res;
}
