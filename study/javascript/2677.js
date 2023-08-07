// 2677 - Chunk Array

function chunk(arr, size) {
    const chunked = [];
    let i = 0;
    while (i < arr.length) {
        chunked.push(arr.slice(i, i + size));
        i += size;
    }
    return chunked;
}
