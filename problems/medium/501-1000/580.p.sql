-- 580 - Count Student Number in Departments

SELECT
    dept_name,
    SUM(IF(gender IS NULL, 0, 1)) AS student_number
FROM
    Department
    LEFT JOIN Student USING(dept_id)
GROUP BY
    dept_name
ORDER BY
    student_number DESC,
    dept_name;
