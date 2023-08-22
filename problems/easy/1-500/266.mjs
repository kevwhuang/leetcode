// 266 - Palindrome Permutation

function canPermutePalindrome(s) {
    const arr = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - 97]++;
    }
    let hasOdd = false;
    for (let i = 0; i < 26; i++) {
        if (arr[i] % 2) {
            if (!hasOdd) hasOdd = true;
            else return false;
        }
    }
    return true;
}
