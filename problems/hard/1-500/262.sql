-- 262 - Trips and Users

SELECT
    request_at AS day,
    ROUND(
        SUM(IF(status = 'completed', 0, 1)) / COUNT(*),
        2
    ) AS 'cancellation rate'
FROM
    Trips
WHERE
    request_at BETWEEN '2013-10-01'
    AND '2013-10-03'
    AND client_id IN (
        SELECT
            users_id
        FROM
            Users
        WHERE
            banned = 'No'
    )
    AND driver_id IN (
        SELECT
            users_id
        FROM
            Users
        WHERE
            banned = 'No'
    )
GROUP BY
    day;
