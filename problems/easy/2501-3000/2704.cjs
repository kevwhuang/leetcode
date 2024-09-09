// 2704 - To Be or Not to Be

function expect(val) {
    return {
        toBe: test => {
            if (test === val) return true;
            throw 'Not Equal';
        },
        notToBe: test => {
            if (test !== val) return true;
            throw 'Equal';
        },
    };
}
