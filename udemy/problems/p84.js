// 84 - Trie Exercise - getWords

class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    addWord(word) {
        let trie = this;
        for (let i = 0; i < word.length; i++) {
            trie.characters[word[i]] = trie.characters[word[i]] || new Trie();
            trie = trie.characters[word[i]];
        }
        trie.isWord = true;
    }
    getWords() {
        function dfs(trie, word) {
            if (!trie) return;
            if (trie.isWord) words.push(word);
            for (const key in trie.characters) {
                dfs(trie.characters[key], word + key);
            }
        }
        const words = [];
        dfs(this, '');
        return words;
    }
}
