// 4 - Frequency Counter / Multiple Counters

function areThereDuplicates(...args) {
    const set = new Set();
    for (let i = 0; i < args.length; i++) {
        if (set.has(args[i])) return true;
        set.add(args[i]);
    }
    return false;
}
