// 2650 - Design Cancellable Function

function cancellable(generator) {
    const cb = (_, rej) => cancel = () => rej('Cancelled');
    let cancel;
    const promise = (async function () {
        const cancelPromise = new Promise(cb);
        let next = generator.next();
        while (!next.done) {
            try {
                const race = Promise.race([next.value, cancelPromise]);
                next = generator.next(await race);
            } catch (e) {
                next = generator.throw(e);
            }
        }
        return next.value;
    }());
    return [cancel, promise];
}
