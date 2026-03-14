const Twitter = require('../../neetcode/heap-priority-queue/design-twitter');

describe('Main', () => {
    test('Case 1', () => {
        const twitter = new Twitter();
        twitter.postTweet(1, 5);
        expect(twitter.getNewsFeed(1)).toStrictEqual([5]);
        twitter.follow(1, 2);
        twitter.postTweet(2, 6);
        expect(twitter.getNewsFeed(1)).toStrictEqual([6, 5]);
        twitter.unfollow(1, 2);
        expect(twitter.getNewsFeed(1)).toStrictEqual([5]);
    });
});
