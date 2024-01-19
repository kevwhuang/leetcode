// 2629 - Function Composition

function compose(functions) {
    return function (x) {
        let res = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            res = functions[i](res);
        }
        return res;
    }
}
