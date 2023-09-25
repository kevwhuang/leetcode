// 2797 - Partial Function With Placeholders

function partial(fn, args) {
    return function (...restArgs) {
        let j = 0;
        for (let i = 0; i < args.length; i++) {
            if (args[i] === '_') args[i] = restArgs[j++];
        }
        for (; j < restArgs.length; j++) {
            args.push(restArgs[j]);
        }
        return fn(...args);
    }
}
