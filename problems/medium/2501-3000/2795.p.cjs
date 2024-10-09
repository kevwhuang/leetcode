// 2795 - Parallel Execution of Promises for Individual Results Retrieval

function promiseAllSettled(functions) {
    return new Promise(res => {
        const arr = new Array(functions.length);
        let settled = 0;
        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then(value => arr[i] = { status: 'fulfilled', value })
                .catch(reason => arr[i] = { status: 'rejected', reason })
                .finally(() => ++settled === functions.length && res(arr));
        }
    });
}
