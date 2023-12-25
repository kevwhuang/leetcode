// 10015 - Add Delegated Event Listener

export function addDelegatedEventListener(eventName, cssSelector, callback) {
    function handler(e) {
        if (!e.target.matches(cssSelector)) return;
        callback.call(e.target, e.target);
    }
    this.addEventListener(eventName, handler);
}
