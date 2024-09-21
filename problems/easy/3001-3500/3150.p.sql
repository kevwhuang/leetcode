-- 3150 - Invalid Tweets II

SELECT
    tweet_id
FROM
    Tweets
WHERE
    LENGTH(content) > 140
    OR LENGTH(content) - LENGTH(REPLACE(content, '@', '')) > 3
    OR LENGTH(content) - LENGTH(REPLACE(content, '#', '')) > 3
ORDER BY
    tweet_id;
