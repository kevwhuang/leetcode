// 2692 - Make Object Immutable

function makeImmutable(obj) {
    const veto = new Set(['pop', 'push', 'shift', 'unshift', 'splice']);
    veto.add('sort').add('reverse');
    const handler = {
        apply(target, thisArg, args) {
            const err = `Error Calling Method: ${target.name}`;
            if (veto.has(target.name)) throw err;
            return target.apply(thisArg, args);
        },
        get(target, prop) {
            const cur = target[prop];
            if (prop === 'prototype' || cur === null) return cur;
            const type = typeof cur;
            if (type !== 'object' && type !== 'function') return cur;
            return new Proxy(cur, this);
        },
        set(target, prop) {
            if (Array.isArray(target)) throw `Error Modifying Index: ${prop}`;
            throw `Error Modifying: ${prop}`;
        },
    };
    return new Proxy(obj, handler);
}
