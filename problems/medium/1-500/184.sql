-- 184 - Department Highest Salary

SELECT
    D.name AS department,
    E.name AS employee,
    salary
FROM
    Employee E
    JOIN Department D ON E.departmentId = D.id
WHERE
    (departmentId, salary) IN (
        SELECT
            departmentId,
            MAX(salary)
        FROM
            Employee
        GROUP BY
            departmentId
    );
