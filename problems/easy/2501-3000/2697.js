// 2697 - Lexicographically Smallest Palindrome

function makeSmallestPalindrome(s) {
    const A = new Array(s.length);
    let l = 0,
        r = s.length - 1;
    while (l <= r) {
        if (s[l] < s[r]) {
            A[l] = s[l];
            A[r--] = s[l++];
        } else {
            A[r] = s[r];
            A[l++] = s[r--];
        }
    }
    return A.join('');
}
