-- 1378 - Replace Employee ID With the Unique Identifier

SELECT
    E.unique_id,
    EU.name
FROM
    EmployeeUNI E
    RIGHT JOIN Employees EU ON E.id = EU.id;