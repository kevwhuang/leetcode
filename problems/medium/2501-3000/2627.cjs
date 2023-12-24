// 2627 - Debounce

function debounce(fn, t) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t);
    }
}
