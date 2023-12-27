-- 2072 - The Winner University

WITH N AS (
    SELECT
        COUNT(*) AS count
    FROM
        NewYork
    WHERE
        score >= 90
),
C AS (
    SELECT
        COUNT(*) AS count
    FROM
        California
    WHERE
        score >= 90
)
SELECT
    (
        CASE
            WHEN N.count > C.count THEN 'New York University'
            WHEN N.count < C.count THEN 'California University'
            ELSE 'No Winner'
        END
    ) AS winner
FROM
    N,
    C;
