// 155 - Min Stack

class MinStack {
    /**
     * @param {number[]} stack
     * @param {number[]} min
     */

    constructor() {
        this.stack = [];
        this.min = [];
    }

    /**
     * @return {number}
     */

    getMin() {
        return this.min.at(-1);
    }

    /**
     * @return {void}
     */

    pop() {
        const last = this.stack.pop();
        if (last === this.min.at(-1)) this.min.pop();
    }

    /**
     * @param {number} val
     * @return {number}
     */

    push(val) {
        this.stack.push(val);
        if (val <= this.min.at(-1) || !this.min.length) this.min.push(val);
    }

    /**
     * @return {number}
     */

    top() {
        return this.stack.at(-1);
    }
}

module.exports = MinStack;
