// 273 - Integer to English Words

function numberToWords(num) {
    function check(word) {
        num = num / 1000 >> 0;
        if (num % 1000) concat(word);
        if (num) convert(num % 1000);
    }
    function convert(cur) {
        if (10 <= cur % 100 && cur % 100 <= 19) {
            concat(dict3[cur % 100 - 10]);
            cur = cur / 100 >> 0;
        } else {
            if (cur % 10) concat(dict1[cur % 10 - 1]);
            cur = cur / 10 >> 0;
            if (cur % 10) concat(dict2[cur % 10 - 2]);
            cur = cur / 10 >> 0;
        }
        if (cur) concat(dict1[cur - 1] + ' Hundred');
    }
    const concat = word => res = word + (res && ' ') + res;
    if (num === 0) return 'Zero';
    const dict1 = [
        'One', 'Two', 'Three', 'Four', 'Five',
        'Six', 'Seven', 'Eight', 'Nine',
    ];
    const dict2 = [
        'Twenty', 'Thirty', 'Forty', 'Fifty',
        'Sixty', 'Seventy', 'Eighty', 'Ninety',
    ];
    const dict3 = [
        'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen',
        'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen',
    ];
    let res = '';
    convert(num % 1000);
    check('Thousand');
    check('Million');
    check('Billion');
    return res;
}
