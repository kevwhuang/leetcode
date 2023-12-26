-- 1075 - Project Employees I

SELECT
    project_id,
    ROUND(SUM(experience_years) / COUNT(*), 2) AS average_years
FROM
    Project
    JOIN Employee USING(employee_id)
GROUP BY
    project_id;
