// 171 - Excel Sheet Column Number

function titleToNumber(columnTitle) {
    let column = 0;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        const letterCode = columnTitle.charCodeAt(i) - 64;
        const power = 26 ** (columnTitle.length - i - 1);
        column += letterCode * power;
    }
    return column;
}
