// 2425 - Bitwise XOR of All Pairings

function xorAllNums(nums1, nums2) {
    const reducer = (xor, num) => xor ^= num;
    const m = nums1.length, n = nums2.length;
    if (m % 2) {
        const xor = nums2.reduce(reducer);
        return n % 2 ? xor ^ nums1.reduce(reducer) : xor;
    }
    return n % 2 ? nums1.reduce(reducer) : 0;
}
