// 10017 - Mutation Observer

export function observeMutations(node, callback) {
    function action(mutations) {
        for (const mutation of mutations) {
            callback(mutation);
        }
    }
    const config = {
        attributes: true,
        attributeOldValue: true,
        childList: true,
        characterData: true,
        characterDataOldValue: true,
        subtree: true,
    };
    const obs = new MutationObserver(action);
    obs.observe(node, config);
    return obs;
}
