// 131 - Palindrome Partitioning

function partition(s) {
    function backtrack(i, cur) {
        if (i === s.length) return palindromes.push([...cur]);
        for (let j = i; j < s.length; j++) {
            if (!isPalindrome(i, j)) continue;
            cur.push(s.slice(i, j + 1));
            backtrack(j + 1, cur);
            cur.pop();
        }
    }
    function isPalindrome(l, r) {
        while (l < r) {
            if (s[l++] !== s[r--]) return false;
        }
        return true;
    }
    const palindromes = [];
    backtrack(0, []);
    return palindromes;
}
