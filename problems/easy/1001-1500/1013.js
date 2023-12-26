// 1013 - Partition Array Into Three Parts With Equal Sum

function canThreePartsEqualSum(arr) {
    let partitions = 0;
    const target = arr.reduce((s, e) => s + e) / 3;
    for (let i = 0, sum = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum === target) {
            sum = 0;
            partitions++;
        }
    }
    return partitions >= 3;
}
