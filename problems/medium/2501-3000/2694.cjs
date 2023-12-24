// 2694 - Event Emitter

class EventEmitter {
    constructor() {
        this.events = new Map();
    }
    emit(eventName, args) {
        if (!this.events.has(eventName)) return [];
        const res = [];
        const listeners = this.events.get(eventName).values();
        for (const listener of listeners) {
            res.push(listener(...args));
        }
        return res;
    }
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) this.events.set(eventName, new Set());
        const listeners = this.events.get(eventName);
        listeners.add(callback);
        return { unsubscribe: () => listeners.delete(callback) };
    }
}
