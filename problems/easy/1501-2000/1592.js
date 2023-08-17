// 1592 - Rearrange Spaces Between Words

function reorderSpaces(text) {
    let spaces = 0;
    for (let i = 0; i < text.length; i++) {
        text[i] === ' ' && spaces++;
    }
    text = text.split(' ').filter(Boolean);
    const len = Math.floor(spaces / (text.length - 1));
    const leftover = spaces % (text.length - 1);
    return len === Infinity
        ? text + ' '.repeat(spaces)
        : text.join(' '.repeat(len)) + ' '.repeat(leftover);
}
