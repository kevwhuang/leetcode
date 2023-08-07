const MinStack = require('../../neetcode/stack/min-stack');

describe('Main', () => {
    test('Case 1', () => {
        const stack = new MinStack();

        stack.push(-2);
        stack.push(0);
        stack.push(-3);
        expect(stack.getMin()).toStrictEqual(-3);
        stack.pop();
        expect(stack.top()).toStrictEqual(0);
        expect(stack.getMin()).toStrictEqual(-2);
    });
});
