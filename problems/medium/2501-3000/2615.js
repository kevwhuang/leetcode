// 2615 - Sum of Distances

function distance(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) map.get(nums[i]).push(i);
        else map.set(nums[i], [i]);
    }
    for (const num of map.keys()) {
        const indices = map.get(num);
        let leftSum = 0, rightSum = indices.reduce((s, e) => s + e);
        const len = indices.length;
        for (let i = 0; i < len; i++) {
            const index = indices[i];
            rightSum -= index;
            nums[index] = index * (i + i + 1 - len) + rightSum - leftSum;
            leftSum += index;
        }
    }
    return nums;
}
