-- 2854 - Rolling Average Steps

SELECT
    user_id,
    S3.steps_date,
    ROUND(
        (S1.steps_count + S2.steps_count + S3.steps_count) / 3,
        2
    ) AS rolling_average
FROM
    Steps S1
    JOIN Steps S2 USING(user_id)
    JOIN Steps S3 USING(user_id)
WHERE
    S1.steps_date + 1 = S2.steps_date
    AND S2.steps_date + 1 = S3.steps_date
ORDER BY
    user_id,
    steps_date;
