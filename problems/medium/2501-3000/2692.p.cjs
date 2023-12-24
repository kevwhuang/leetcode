// 2692 - Make Object Immutable

function makeImmutable(obj) {
    const banned = new Set(['pop', 'push', 'shift', 'unshift']);
    banned.add('splice').add('sort').add('reverse');
    const handler = {
        apply(target, thisArg, args) {
            if (banned.has(target.name)) throw `Error Calling Method: ${target.name}`;
            return target.apply(thisArg, args);
        },
        get(target, prop) {
            const cur = target[prop];
            if (prop === 'prototype' || cur === null) return cur;
            if (typeof cur !== 'object' && typeof cur !== 'function') return cur;
            return new Proxy(cur, this);
        },
        set(target, prop) {
            if (Array.isArray(target)) throw `Error Modifying Index: ${prop}`;
            throw `Error Modifying: ${prop}`;
        },
    };
    return new Proxy(obj, handler);
}
