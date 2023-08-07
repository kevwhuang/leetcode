// 448 - Find All Numbers Disappeared in an Array

function findDisappearedNumbers(nums) {
    const ans = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        ans[i] = i + 1;
    }
    for (let i = 0; i < nums.length; i++) {
        delete ans[nums[i] - 1];
    }
    return ans.flat();
}
