// 355 - Design Twitter

class Twitter {
    constructor() {
        this.users = {};
        this.tweets = [];
    }
    follow(followerId, followeeId) {
        if (followerId in this.users) this.users[followerId].add(followeeId);
        else this.users[followerId] = new Set([followeeId]);
    }
    getNewsFeed(userId) {
        const feed = [];
        let i = this.tweets.length, author;
        while (feed.length < 10 && --i >= 0) {
            author = this.tweets[i][0];
            if (author === userId || this.users[userId]?.has(author)) {
                feed.push(this.tweets[i][1]);
            }
        }
        return feed;
    }
    postTweet(userId, tweetId) {
        this.tweets.push([userId, tweetId]);
    }
    unfollow(followerId, followeeId) {
        if (followerId in this.users) this.users[followerId].delete(followeeId);
    }
}
