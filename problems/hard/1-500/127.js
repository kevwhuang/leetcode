// 127 - Word Ladder

function ladderLength(beginWord, endWord, wordList) {
    wordList = new Set(wordList);
    if (!wordList.has(endWord)) return 0;
    const letters = new Set();
    for (let code = 97; code <= 122; code++) {
        letters.add(String.fromCharCode(code));
    }
    let set1 = new Set([beginWord]);
    let set2 = new Set([endWord]);
    let steps = 0;
    while (set1.size && ++steps) {
        const nextSet = new Set();
        for (const word of set1) {
            for (let i = 0; i < word.length; i++) {
                const pre = word.slice(0, i);
                const post = word.slice(i + 1);
                for (const char of letters) {
                    const nextWord = pre + char + post;
                    if (set2.has(nextWord)) return steps + 1;
                    if (!wordList.has(nextWord)) continue;
                    wordList.delete(nextWord);
                    nextSet.add(nextWord);
                }
            }
        }
        if (nextSet.size <= set2.size) set1 = nextSet;
        else set1 = set2, set2 = nextSet;
    }
    return 0;
}
