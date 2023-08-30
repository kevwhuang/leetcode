-- 1407 - Top Travellers

SELECT
    name,
    COALESCE(SUM(distance), 0) AS travelled_distance
FROM
    Users AS U
    LEFT JOIN Rides AS R ON U.id = R.user_id
GROUP BY
    U.id
ORDER BY
    travelled_distance DESC,
    name;