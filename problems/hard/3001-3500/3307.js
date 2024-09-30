// 3307 - Find the Kth Character in String Game II

function kthCharacter(k, operations) {
    let ops = 0, n = 1 + Math.log2(k) >> 0;
    while (~--n) if (k > 2 ** n) ops += operations[n], k -= 2 ** n;
    return String.fromCharCode(97 + ops % 26);
}
