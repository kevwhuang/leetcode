// 1523 - Count Odd Numbers in an Interval Range

function countOdds(low, high) {
    const count = Math.floor((high - low) / 2);
    return low % 2 === 0 && high % 2 === 0 ? count : count + 1;
}
