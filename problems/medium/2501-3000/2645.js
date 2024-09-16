// 2645 - Minimum Additions to Make Valid String

function addMinimum(word) {
    const dict = { a: 'b', b: 'c', c: 'a' };
    let res = 0, cur = 'a', i = 0;
    while (i < word.length) {
        if (word[i] === cur) i++;
        else res++;
        cur = dict[cur];
    }
    if (cur === 'b') res += 2;
    else if (cur === 'c') res++;
    return res;
}
