-- 550 - Game Play Analysis IV

WITH CTE AS (
    SELECT
        COUNT(*)
    FROM
        Activity
    WHERE
        (player_id, event_date) IN (
            SELECT
                player_id,
                DATE_ADD(MIN(event_date), INTERVAL 1 DAY)
            FROM
                Activity
            GROUP BY
                player_id
        )
)
SELECT
    ROUND(
        (
            SELECT
                *
            FROM
                CTE
        ) / (
            SELECT
                COUNT(DISTINCT player_id)
            FROM
                Activity
        ),
        2
    ) AS fraction;
