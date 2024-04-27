// 2698 - Find the Punishment Number of an Integer

function punishmentNumber(n) {
    function backtrack(i, partition) {
        if (i === square.length) {
            return partition.reduce((s, e) => s + Number(e), 0) === n;
        }
        for (let j = i + 1; j <= square.length; j++) {
            partition.push(square.slice(i, j));
            if (backtrack(j, partition)) return true;
            partition.pop();
        }
    }
    let punishment = 0, square;
    while (n) {
        square = String(n * n);
        if (backtrack(0, [])) punishment += n * n;
        n--;
    }
    return punishment;
}
