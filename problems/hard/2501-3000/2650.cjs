// 2650 - Design Cancellable Function

function cancellable(generator) {
    let cancel;
    const promise = (async function () {
        const cancelPromise = new Promise((_, rej) => cancel = () => rej('Cancelled'));
        let next = generator.next();
        while (!next.done) {
            try {
                next = generator.next(await Promise.race([next.value, cancelPromise]));
            } catch (e) {
                next = generator.throw(e);
            }
        }
        return next.value;
    }());
    return [cancel, promise];
}
