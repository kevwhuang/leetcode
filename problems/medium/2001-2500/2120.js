// 2120 - Execution of All Suffix Instructions Staying in a Grid

function executeInstructions(n, startPos, s) {
    const ans = new Array(s.length).fill(0);
    for (let i = 0, r, c; i < s.length; i++) {
        r = startPos[0], c = startPos[1];
        for (let j = i; j < s.length; j++) {
            switch (s[j]) {
                case 'U':
                    r--;
                    break;
                case 'D':
                    r++;
                    break;
                case 'L':
                    c--;
                    break;
                case 'R':
                    c++;
            }
            if (r < 0 || r === n || c < 0 || c === n) break;
            ans[i]++;
        }
    }
    return ans;
}
