// 1742 - Maximum Number of Balls in a Box

function countBalls(lowLimit, highLimit) {
    const map = new Map();
    let max = 1;
    while (lowLimit <= highLimit) {
        let sum = 0, num = lowLimit++;
        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        map.set(sum, map.get(sum) + 1 || 1);
        map.get(sum) > max && max++;
    }
    return max;
}
