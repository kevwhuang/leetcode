-- 1076 - Project Employees II

SELECT
    project_id
FROM
    Project
GROUP BY
    project_id
HAVING
    COUNT(*) = (
        SELECT
            COUNT(*)
        FROM
            Project
        GROUP BY
            project_id
        ORDER BY
            1 DESC
        LIMIT
            1
    );
