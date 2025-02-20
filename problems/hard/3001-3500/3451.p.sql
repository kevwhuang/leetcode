-- 3451 - Find Invalid IP Addresses

SELECT
    ip,
    COUNT(*) AS invalid_count
FROM
    Logs
WHERE
    ip NOT REGEXP '^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])[.]){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$'
GROUP BY
    ip
ORDER BY
    invalid_count DESC,
    ip DESC;
