// 212 - Word Search II

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

function findWords(board, words) {
    function dfs(r, c, node) {
        if (!node) return;
        if (node.word) {
            res.push(node.word);
            prune(node.word, trie);
            node.word = null;
        }
        const char = board[r][c];
        board[r][c] = '';
        if (r) dfs(r - 1, c, node[board[r - 1][c]]);
        if (r + 1 < m) dfs(r + 1, c, node[board[r + 1][c]]);
        if (c) dfs(r, c - 1, node[board[r][c - 1]]);
        if (c + 1 < n) dfs(r, c + 1, node[board[r][c + 1]]);
        board[r][c] = char;
    }
    function prune(word, node) {
        for (let j = 0; j < word.length; j++) {
            if (!--node[word[j]].count) return delete node[word[j]];
            node = node[word[j]];
        }
    }
    const trie = {};
    for (let i = 0; i < words.length; i++) {
        let node = trie;
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            node[word[j]] ??= { count: 0 };
            node[word[j]].count++;
            node = node[word[j]];
        }
        node.word = word;
    }
    const res = [], m = board.length, n = board[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            dfs(r, c, trie[board[r][c]]);
        }
    }
    return res;
}

module.exports = findWords;
