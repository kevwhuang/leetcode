// 284 - Peeking Iterator

class PeekingIterator {
    constructor(iterator) {
        this.iterator = iterator;
        this.temp = null;
    }
    hasNext() {
        return this.temp || this.iterator.hasNext();
    }
    next() {
        if (this.temp) {
            const val = this.temp;
            this.temp = null;
            return val;
        } else {
            return this.iterator.next();
        }
    }
    peek() {
        if (!this.temp) this.temp = this.iterator.next();
        return this.temp;
    }
}
