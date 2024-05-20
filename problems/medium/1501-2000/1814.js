// 1814 - Count Nice Pairs in an Array

function countNicePairs(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let rev = 0, cur = nums[i];
        while (cur) {
            rev = (10 * rev) + cur % 10;
            cur = cur / 10 >> 0;
        }
        const diff = nums[i] - rev;
        map.set(diff, (map.get(diff) ?? 0) + 1);
    }
    let pairs = 0;
    for (const freq of map.values()) {
        pairs += freq * (freq - 1) / 2;
        pairs %= 1000000007;
    }
    return pairs;
}
