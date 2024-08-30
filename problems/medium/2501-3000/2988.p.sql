-- 2988 - Manager of the Largest Department

WITH CTE AS (
    SELECT
        COUNT(*)
    FROM
        Employees
    GROUP BY
        dep_id
    ORDER BY
        1 DESC
    LIMIT
        1
)
SELECT
    emp_name AS manager_name,
    dep_id
FROM
    Employees
GROUP BY
    dep_id
HAVING
    COUNT(dep_id) = (
        SELECT
            *
        FROM
            CTE
    )
ORDER BY
    dep_id;
