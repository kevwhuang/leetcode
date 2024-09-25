-- 3140 - Consecutive Available Seats II

WITH Gaps AS (
    SELECT
        seat_id,
        seat_id - ROW_NUMBER() OVER (
            ORDER BY
                seat_id
        ) AS gap
    FROM
        Cinema
    WHERE
        free = 1
),
Islands AS (
    SELECT
        MIN(seat_id) AS first_seat_id,
        MAX(seat_id) AS last_seat_id,
        MAX(seat_id) - MIN(seat_id) + 1 AS consecutive_seats_len
    FROM
        Gaps
    GROUP BY
        gap
)
SELECT
    *
FROM
    Islands
WHERE
    consecutive_seats_len = (
        SELECT
            MAX(consecutive_seats_len)
        FROM
            Islands
    );
