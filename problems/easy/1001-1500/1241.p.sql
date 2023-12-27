-- 1241 - Number of Comments Per Post

WITH Posts AS (
    SELECT
        DISTINCT sub_id AS post_id
    FROM
        Submissions
    WHERE
        parent_id IS NULL
)
SELECT
    post_id,
    COUNT(DISTINCT sub_id) AS number_of_comments
FROM
    Posts
    LEFT JOIN Submissions AS S ON post_id = parent_id
GROUP BY
    1
ORDER BY
    1;
