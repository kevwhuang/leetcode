// 2899 - Last Visited Integers

function lastVisitedIntegers(words) {
    const res = [];
    for (let i = 0, nums = []; i < words.length;) {
        if (words[i] === 'prev') {
            let j = nums.length - 1;
            while (words[i] === 'prev' && ++i) res.push(nums[j--] || -1);
        } else {
            nums.push(words[i++]);
        }
    }
    return res;
}
