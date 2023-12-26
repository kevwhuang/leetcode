// 2120 - Execution of All Suffix Instructions Staying in a Grid

function executeInstructions(n, startPos, s) {
    const ans = new Array(s.length).fill(0);
    for (let i = 0; i < s.length; i++) {
        let r = startPos[0], c = startPos[1];
        for (let j = i; j < s.length; j++) {
            switch (s[j]) {
                case 'U': r--; break;
                case 'D': r++; break;
                case 'L': c--; break;
                case 'R': c++;
            }
            if (r === -1 || r === n || c === -1 || c === n) break;
            ans[i]++;
        }
    }
    return ans;
}
