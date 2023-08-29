// 278 - First Bad Version

function solution(isBadVersion) {
    function find(n) {
        let l = 0, r = n, m;
        while (l < r) {
            m = ~~((l + r) / 2);
            if (isBadVersion(m)) r = m;
            else l = m + 1;
        }
        return l;
    }
    return find;
}
