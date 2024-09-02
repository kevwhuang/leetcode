// 158 - Read N Characters Given Read4 II - Call Multiple Times

function solution(read4) {
    function readN(buf, n) {
        while (true) {
            while (buf.length < n && buffer.length) buf.push(buffer.shift());
            if (buf.length === n) break;
            read4(buffer);
            if (buffer.length === 0) break;
        }
    }
    const buffer = [];
    return readN;
}
