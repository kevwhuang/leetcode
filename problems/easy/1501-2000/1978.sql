-- 1978 - Employees Whose Manager Left the Company

SELECT
    employee_id
FROM
    Employees
WHERE
    manager_id NOT IN (
        SELECT
            DISTINCT employee_id
        FROM
            Employees
    )
    AND salary < 30000
ORDER BY
    1;