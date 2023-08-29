// 168 - Excel Sheet Column Title

function convertToTitle(columnNumber) {
    let title = '';
    while (columnNumber) {
        columnNumber--;
        title = String.fromCharCode(columnNumber % 26 + 65) + title;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return title;
}
