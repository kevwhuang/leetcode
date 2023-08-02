// 68 - Text Justification

function fullJustify(words, maxWidth) {
    const text = [];
    let i = 0;
    while (i < words.length) {
        const line = [words[i]];
        let len = line[0].length;
        while (++i < words.length) {
            if (len + words[i].length + 1 > maxWidth) break;
            line.push(' ');
            line.push(words[i]);
            len += words[i].length + 1;
        }
        if (i === words.length || line.length === 1) {
            text.push(line.join('').padEnd(maxWidth, ' '));
            continue;
        }
        let j = 1;
        while (len++ < maxWidth) {
            line[j] += ' ';
            if ((j += 2) === line.length) j = 1;
        }
        text.push(line.join(''));
    }
    return text;
}
