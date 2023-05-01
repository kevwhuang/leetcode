module.exports = class MinStack {
    /**
     * @param {number} length
     * @param {number[]} min
     * @param {number[]} stack
     */

    constructor() {
        this.length = 0;
        this.min = [];
        this.stack = [];
    }

    /**
     * @return {number}
     */

    getMin() {
        return this.min[this.length - 1];
    }

    /**
     * @return {void}
     */

    pop() {
        delete this.min[this.length - 1], this.stack[this.length - 1];
        this.length--;
    }

    /**
     * @param {number} val
     * @return {number}
     */

    push(val) {
        this.min[this.length] = !this.length || val < this.min[this.length - 1]
            ? val : this.min[this.length - 1];
        this.stack[this.length] = val;
        this.length++;
    }

    /**
     * @return {number}
     */

    top() {
        return this.stack[this.length - 1];
    }
};
