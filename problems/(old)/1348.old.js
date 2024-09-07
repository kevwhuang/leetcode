// 1348 - Tweet Counts Per Frequency

class TweetCounts {
    constructor() {
        this.tweets = new Map();
        this.intervals = { minute: 59, hour: 3599, day: 86399 };
    }
    getTweetCountsPerFrequency(freq, tweetName, startTime, endTime) {
        const dt = this.intervals[freq];
        const size = Math.ceil((endTime - startTime + 1) / (dt + 1));
        const res = new Uint16Array(size);
        const times = this.#init(tweetName);
        const len = times.length, r = len - 1;
        let start = startTime, i = 0;
        while (start <= endTime) {
            const end = Math.min(start + dt, endTime);
            if (len === 0 || times[0][0] > end || times[r][0] < start) {
                res[i++] = 0;
                start = end + 1;
                continue;
            }
            const startIdx = this.#binarySearchAtLeast(times, start, 0, r);
            const endIdx = this.#binarySearchAtMost(times, end, 0, r);
            res[i] = times[endIdx][1];
            res[i++] -= startIdx ? times[startIdx - 1][1] : 0;
            start = end + 1;
        }
        return res;
    }
    recordTweet(tweetName, time) {
        if (!this.tweets.has(tweetName)) {
            this.tweets.set(tweetName, new Map([[time, 0]]));
        }
        if (!this.tweets.get(tweetName).has(time)) {
            this.tweets.get(tweetName).set(time, 0);
        }
        const freq = this.tweets.get(tweetName).get(time) + 1;
        this.tweets.get(tweetName).set(time, freq);
    }
    #binarySearchAtLeast(arr, tgt, l, r) {
        let idx;
        while (l <= r) {
            const m = l + r >> 1;
            if (arr[m][0] < tgt) l = m + 1;
            else r = (idx = m) - 1;
        }
        return idx;
    }
    #binarySearchAtMost(arr, tgt, l, r) {
        let idx;
        while (l <= r) {
            const m = l + r >> 1;
            if (arr[m][0] > tgt) r = m - 1;
            else l = (idx = m) + 1;
        }
        return idx;
    }
    #init(tweetName) {
        if (!this.tweets.has(tweetName)) return [];
        const times = [...this.tweets.get(tweetName).entries()];
        times.sort((a, b) => a[0] - b[0]);
        for (let i = 1; i < times.length; i++) {
            times[i][1] += times[i - 1][1];
        }
        return times;
    }
}
