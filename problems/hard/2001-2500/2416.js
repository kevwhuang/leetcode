// 2416 - Sum of Prefix Scores of Strings

function sumPrefixScores(words) {
    const trie = {};
    for (let i = 0; i < words.length; i++) {
        let node = trie;
        for (let j = 0; j < words[i].length; j++) {
            node[words[i][j]] ??= { count: 0 };
            node[words[i][j]].count++;
            node = node[words[i][j]];
        }
    }
    const res = new Uint32Array(words.length);
    for (let i = 0; i < words.length; i++) {
        let node = trie;
        for (let j = 0; j < words[i].length; j++) {
            res[i] += node[words[i][j]].count;
            node = node[words[i][j]];
        }
    }
    return res;
}
