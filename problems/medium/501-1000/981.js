// 981 - Time Based Key-Value Store

class TimeMap {
    constructor() {
        this.map = new Map();
    }
    get(key, timestamp) {
        const arr = this.map.get(key);
        if (!arr || arr[0][1] > timestamp) return '';
        let l = 0, r = arr.length - 1;
        while (l < r) {
            const m = l + r >> 1;
            if (arr[m][1] < timestamp) l = m + 1;
            else r = m;
        }
        return arr[r][1] > timestamp ? arr[r - 1][0] : arr[r][0];
    }
    set(key, value, timestamp) {
        if (!this.map.has(key)) this.map.set(key, []);
        this.map.get(key).push([value, timestamp]);
    }
}
