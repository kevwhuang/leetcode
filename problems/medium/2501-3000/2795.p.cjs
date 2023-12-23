// 2795 - Parallel Execution of Promises for Individual Results Retrieval

function promiseAllSettled(functions) {
    return new Promise(res => {
        const ans = new Array(functions.length).fill();
        let settled = 0;
        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then(value => ans[i] = { status: 'fulfilled', value })
                .catch(reason => ans[i] = { status: 'rejected', reason })
                .finally(() => ++settled === functions.length && res(ans));
        }
    });
}
