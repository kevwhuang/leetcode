// 155 - Min Stack

class MinStack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    getMin() {
        return this.stack2.at(-1);
    }
    pop() {
        if (this.stack1.pop() === this.stack2.at(-1)) this.stack2.pop();
    }
    push(val) {
        this.stack1.push(val);
        if (this.stack2.length === 0) this.stack2.push(val);
        else if (val <= this.stack2.at(-1)) this.stack2.push(val);
    }
    top() {
        return this.stack1.at(-1);
    }
}
