// 155 - Min Stack

class MinStack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    /**
     * @return {number}
     */

    getMin() {
        return this.stack2.at(-1);
    }

    /**
     * @return {void}
     */

    pop() {
        if (this.stack1.pop() === this.stack2.at(-1)) this.stack2.pop();
    }

    /**
     * @param {number} val
     * @return {number}
     */

    push(val) {
        this.stack1.push(val);
        if (this.stack2.length === 0) this.stack2.push(val);
        else if (val <= this.stack2.at(-1)) this.stack2.push(val);
    }

    /**
     * @return {number}
     */

    top() {
        return this.stack1.at(-1);
    }
}

module.exports = MinStack;
