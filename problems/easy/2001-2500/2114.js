// 2114 - Maximum Number of Words Found in Sentences

function mostWordsFound(sentences) {
    let max = 0;
    for (let i = 0; i < sentences.length; i++) {
        const replaced = sentences[i].replaceAll(' ', '');
        max = Math.max(sentences[i].length - replaced.length + 1, max);
    }
    return max;
}
