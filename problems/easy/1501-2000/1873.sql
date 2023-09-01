-- 1873 - Calculate Special Bonus

SELECT
    employee_id,
    IF(
        MOD(employee_id, 2) = 1
        AND name NOT LIKE 'M%',
        salary,
        0
    ) AS bonus
FROM
    Employees
ORDER BY
    employee_id;