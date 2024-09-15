-- 2051 - The Category of Each Member in the Store

WITH CTE AS (
    SELECT
        member_id,
        100 * SUM(IF(charged_amount IS NULL, 0, 1)) / COUNT(visit_date) AS conversion
    FROM
        Visits
        LEFT JOIN Purchases USING(visit_id)
    GROUP BY
        member_id
)
SELECT
    member_id,
    name,
    CASE
        WHEN conversion IS NULL THEN 'Bronze'
        WHEN conversion < 50 THEN 'Silver'
        WHEN conversion < 80 THEN 'Gold'
        ELSE 'Diamond'
    END AS category
FROM
    Members
    LEFT JOIN CTE USING(member_id);
