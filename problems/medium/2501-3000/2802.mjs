// 2802 - Find the Kth Lucky Number

function kthLuckyNumber(k) {
    return (k + 1)
        .toString(2)
        .replaceAll('0', '4')
        .replaceAll('1', '7')
        .slice(1);
}
