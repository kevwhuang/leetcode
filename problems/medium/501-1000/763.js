// 763 - Partition Labels

function partitionLabels(s) {
    const len = s.length;
    const lastIndex = new Array(26);
    for (let i = 0; i < len; i++) {
        lastIndex[s.charCodeAt(i) - 97] = i;
    }
    const partitions = [];
    let i = 0;
    while (i < len) {
        let end = lastIndex[s.charCodeAt(i) - 97];
        for (let j = i; j < len; j++) {
            if (j === end) {
                partitions.push(j - i + 1);
                i = j + 1;
                break;
            }
            end = Math.max(lastIndex[s.charCodeAt(j) - 97], end);
        }
    }
    return partitions;
}
