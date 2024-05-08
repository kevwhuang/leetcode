// 2587 - Rearrange Array to Maximize Prefix Score

function maxScore(nums) {
    let sum = 0;
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) sum += nums[i];
        else arr.push(nums[i]);
    }
    arr.sort((a, b) => b - a);
    let score = nums.length - arr.length;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum <= 0) break;
        score++;
    }
    return score;
}
