// 58 - Stack With 2 Queues

class Stack {
    constructor() {
        this.items = [];
    }
    pop() {
        if (this.items.length === 0) return null;
        return this.items.pop();
    }
    push(val) {
        return this.items.push(val) && this;
    }
}
