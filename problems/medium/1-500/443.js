// 443 - String Compression

function compress(chars) {
    let read = 0, write = 0;
    while (read < chars.length) {
        let count = 1;
        while (chars[read] === chars[read + 1]) {
            read++;
            count++;
        }
        chars[write++] = chars[read++];
        if (count === 1) continue;
        count = count.toString();
        for (let i = 0; i < count.length;) {
            chars[write++] = count[i++];
        }
    }
    return write;
}
