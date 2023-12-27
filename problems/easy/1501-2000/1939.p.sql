-- 1939 - Users That Actively Request Confirmation Messages

SELECT
    DISTINCT C1.user_id
FROM
    Confirmations AS C1
    JOIN Confirmations AS C2 ON C1.user_id = C2.user_id
    AND C1.time_stamp < C2.time_stamp
WHERE
    TIMESTAMPDIFF(SECOND, C1.time_stamp, C2.time_stamp) <= 86400;
