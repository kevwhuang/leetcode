// 1296 - Divide Array in Sets of K Consecutive Numbers

function isPossibleDivide(nums, k) {
    if (nums.length % k) return false;
    nums.sort((a, b) => a - b);
    if (nums[0] + k - 1 > nums.at(-1)) return false;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    while (map.size) {
        const [freq] = map.values();
        let [start] = map.keys();
        map.delete(start);
        for (let i = 0; i < k - 1; i++) {
            const newFreq = (map.get(++start) || 0) - freq;
            if (newFreq < 0) return false;
            if (newFreq === 0) map.delete(start);
            else map.set(start, newFreq);
        }
    }
    return true;
}
