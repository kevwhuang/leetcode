// 455 - Assign Cookies

function findContentChildren(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let count = 0, pg = 0, ps = 0;
    while (pg < g.length & ps < s.length) {
        if (s[ps] >= g[pg]) {
            pg++;
            count++;
        }
        ps++;
    }
    return count;
}
