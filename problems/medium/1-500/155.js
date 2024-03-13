// 155 - Min Stack

class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }
    getMin() {
        return this.min.at(-1);
    }
    pop() {
        const last = this.stack.pop();
        if (last === this.min.at(-1)) this.min.pop();
    }
    push(val) {
        this.stack.push(val);
        if (val <= this.min.at(-1) || !this.min.length) this.min.push(val);
    }
    top() {
        return this.stack.at(-1);
    }
}
