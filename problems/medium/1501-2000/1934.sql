-- 1934 - Confirmation Rate

WITH CTE AS (
    SELECT
        user_id,
        ROUND(SUM(IF(action = 'timeout', 0, 1)) / COUNT(*), 2) AS rate
    FROM
        Confirmations
    GROUP BY
        user_id
)
SELECT
    user_id,
    COALESCE(CTE.rate, 0) AS confirmation_rate
FROM
    Signups
    LEFT JOIN CTE USING(user_id);
