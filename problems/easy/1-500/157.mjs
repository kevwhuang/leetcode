// 157 - Read N Characters Given Read4

function solution(read4) {
    function readN(buf, n) {
        let i = 0, buf4, len = 4;
        while (len === 4) {
            buf4 = [];
            len = read4(buf4);
            for (let j = 0; i < n && j < len; i++, j++) {
                buf[i] = buf4[j];
            }
        }
        return buf4.length;
    }
    return readN;
}
