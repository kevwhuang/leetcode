-- 3252 - Premier League Table Ranking II

WITH CTE AS (
    SELECT
        team_name,
        wins * 3 + draws AS points,
        RANK() OVER (
            ORDER BY
                wins * 3 + draws DESC
        ) AS position
    FROM
        TeamStats
    GROUP BY
        team_name
    ORDER BY
        points DESC,
        team_name
),
Count AS (
    SELECT
        COUNT(*)
    FROM
        TeamStats
)
SELECT
    team_name,
    points,
    position,
    CASE
        WHEN (position - 1) / (
            SELECT
                *
            FROM
                Count
        ) <= 0.33 THEN 'Tier 1'
        WHEN (position - 1) / (
            SELECT
                *
            FROM
                Count
        ) <= 0.66 THEN 'Tier 2'
        ELSE 'Tier 3'
    END AS tier
FROM
    CTE;
