// 648 - Replace Words

function replaceWords(dictionary, sentence) {
    class Trie {
        constructor() {
            this.trie = {};
        }
        add(word) {
            let node = this.trie;
            for (let i = 0, char; i < word.length; i++) {
                char = word[i];
                if (!(char in node)) node[char] = {};
                node = node[char];
            }
            node.isWord = true;
        }
        find(word) {
            let node = this.trie;
            for (let i = 0, char; i < word.length; i++) {
                char = word[i];
                if (!(char in node)) break;
                else if (node[char].isWord) return i;
                node = node[char];
            }
            return -1;
        }
    }
    const trie = new Trie();
    for (let i = 0; i < dictionary.length; i++) {
        trie.add(dictionary[i]);
    }
    sentence = sentence.split(' ');
    for (let i = 0; i < sentence.length; i++) {
        const index = trie.find(sentence[i]);
        if (index === -1) continue;
        sentence[i] = sentence[i].slice(0, index + 1);
    }
    return sentence.join(' ');
}
