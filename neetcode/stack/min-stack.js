// 155 - Min Stack

class MinStack {
    constructor() {
        this.S1 = [];
        this.S2 = [];
    }

    /**
     * @return {number}
     */

    getMin() {
        return this.S2.at(-1);
    }

    /**
     * @return {void}
     */

    pop() {
        if (this.S1.pop() === this.S2.at(-1)) this.S2.pop();
    }

    /**
     * @param {number} val
     * @return {number}
     */

    push(val) {
        this.S1.push(val);
        if (this.S2.length === 0) this.S2.push(val);
        else if (val <= this.S2.at(-1)) this.S2.push(val);
    }

    /**
     * @return {number}
     */

    top() {
        return this.S1.at(-1);
    }
}

module.exports = MinStack;
