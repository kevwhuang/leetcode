// 1742 - Maximum Number of Balls in a Box

function countBalls(lowLimit, highLimit) {
    let max = 1;
    const map = new Map();
    while (lowLimit <= highLimit) {
        let sum = 0, num = lowLimit++;
        while (num) {
            sum += num % 10;
            num = num / 10 >> 0;
        }
        const freq = map.get(sum) + 1 || 1;
        map.set(sum, freq);
        if (freq > max) max++;
    }
    return max;
}
