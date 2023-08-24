// 680 - Valid Palindrome II

function validPalindrome(s) {
    function isPalindrome(start, end) {
        let l = start, r = end;
        while (++l < --r) {
            if (s[l] !== s[r]) return false;
        }
        return true;
    }
    let l = -1, r = s.length;
    while (++l < --r) {
        if (s[l] !== s[r]) return isPalindrome(l, r + 1) || isPalindrome(l - 1, r);
    }
    return true;
}
