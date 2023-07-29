// 2723 - Add Two Promises
async function addTwoPromises(promise1, promise2) {
    const [value1, value2] = await Promise.all([promise1, promise2]);
    return value1 + value2;
}
