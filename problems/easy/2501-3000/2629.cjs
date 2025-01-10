// 2629 - Function Composition

function compose(functions) {
    return function (res) {
        for (let i = functions.length - 1; ~i; i--) {
            res = functions[i](res);
        }
        return res;
    };
}
