// 2824 - Count Pairs Whose Sum Is Less Than Target

function countPairs(nums, target) {
    let pairs = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            nums[i] + nums[j] < target && pairs++;
        }
    }
    return pairs;
}
