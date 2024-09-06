-- 1378 - Replace Employee ID With the Unique Identifier

SELECT
    unique_id,
    name
FROM
    EmployeeUNI
    RIGHT JOIN Employees USING(id);
