-- 2026 - Low-Quality Problems

SELECT
    problem_id
FROM
    Problems
WHERE
    (likes / (likes + dislikes)) <.6
ORDER BY
    problem_id;