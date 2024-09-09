// 2797 - Partial Function With Placeholders

function partial(fn, args) {
    return function (...restArgs) {
        let i = -1, j = 0;
        while (++i < args.length) {
            if (args[i] === '_') args[i] = restArgs[j++];
        }
        while (j < restArgs.length) args.push(restArgs[j++]);
        return fn(...args);
    };
}
