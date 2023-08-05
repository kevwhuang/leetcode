// 1656 - Design an Ordered Stream

class OrderedStream {
    constructor(n) {
        this.stream = new Array(n).fill('');
        this.ptr = 0;
    }
    insert(idKey, value) {
        const chunk = [];
        this.stream[idKey - 1] = value;
        while (this.stream[this.ptr]) {
            chunk.push(this.stream[this.ptr++]);
        }
        return chunk;
    }
}
