// 705 - Design HashSet

class MyHashSet {
    add(key) {
        this[key] = null;
    }
    contains(key) {
        return this.hasOwnProperty(key);
    }
    remove(key) {
        delete this[key];
    }
}
