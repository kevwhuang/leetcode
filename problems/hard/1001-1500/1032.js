// 1032 - Stream of Characters

class StreamChecker {
    constructor(words) {
        this.trie = this.#init(words);
        this.queue = [];
    }
    query(letter) {
        let suffix = false;
        const nextQueue = [];
        for (let i = 0; i < this.queue.length; i++) {
            const next = this.queue[i][letter];
            if (!next) continue;
            if (next.word) suffix = true;
            nextQueue.push(next);
        }
        const next = this.trie[letter];
        if (next) {
            if (next.word) suffix = true;
            nextQueue.push(next);
        }
        this.queue = nextQueue;
        return suffix;
    }
    #init(words) {
        const trie = {};
        for (let i = 0; i < words.length; i++) {
            let node = trie;
            const word = words[i];
            for (let j = 0; j < word.length; j++) {
                node[word[j]] ??= {};
                node = node[word[j]];
            }
            node.word = true;
        }
        return trie;
    }
}
