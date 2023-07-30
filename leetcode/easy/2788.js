// 2788 - Split Strings by Separator

function splitWordsBySeparator(words, separator) {
    const output = [];
    for (let i = 0; i < words.length; i++) {
        words[i]
            .split(separator)
            .forEach(e => e.length && output.push(e));
    }
    return output;
}
