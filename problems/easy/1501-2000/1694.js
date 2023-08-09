// 1694 - Reformat Phone Number

function reformatNumber(number) {
    number = number.replaceAll(/[ -]/g, '');
    let formatted = '';
    for (let i = 0; ; i += 3) {
        const remaining = number.length - i;
        if (remaining === 2 || remaining === 3) {
            formatted += number.slice(i);
            break;
        } else if (remaining === 4) {
            formatted += number.slice(i, i + 2) + '-' + number.slice(i + 2);
            break;
        }
        formatted += number.slice(i, i + 3) + '-';
    }
    return formatted;
}
