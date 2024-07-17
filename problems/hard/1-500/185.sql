-- 185 - Department Top Three Salaries

WITH CTE AS (
    SELECT
        D.name AS department,
        E.name AS employee,
        salary,
        DENSE_RANK() OVER (
            PARTITION BY D.name
            ORDER BY
                salary DESC
        ) AS 'rank'
    FROM
        Employee E
        JOIN Department D ON E.departmentId = D.id
)
SELECT
    department,
    employee,
    salary
FROM
    CTE
WHERE
    CTE.rank <= 3;
