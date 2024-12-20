// 355 - Design Twitter

class Twitter {
    constructor() {
        this.M = Array.from({ length: 501 }, () => []);
        this.arr = Array.from({ length: 501 }, () => new Set());
        this.dict = new Uint16Array(10001);
        this.acc = 0;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */

    follow(followerId, followeeId) {
        this.arr[followerId].add(followeeId);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */

    getNewsFeed(userId) {
        const res = [...this.M[userId]];
        this.arr[userId].forEach(e => res.push(...this.M[e]));
        res.sort((a, b) => this.dict[b] - this.dict[a]);
        return res.slice(0, 10);
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */

    postTweet(userId, tweetId) {
        this.M[userId].push(tweetId);
        this.dict[tweetId] = this.acc++;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */

    unfollow(followerId, followeeId) {
        this.arr[followerId].delete(followeeId);
    }
}

module.exports = Twitter;
