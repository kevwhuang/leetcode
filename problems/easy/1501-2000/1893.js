// 1893 - Check If All the Integers in a Range Are Covered

function isCovered(ranges, left, right) {
    const set = new Set();
    for (let i = 0; i < ranges.length; i++) {
        for (let j = ranges[i][0]; j <= ranges[i][1]; j++) {
            set.add(j);
        }
    }
    for (let i = left; i <= right; i++) {
        if (!set.has(i)) return false;
    }
    return true;
}
