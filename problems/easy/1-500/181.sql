-- 181 - Employees Earning More Than Their Managers

SELECT
    t1.name Employee
FROM
    Employee t1
    JOIN Employee t2 ON t1.managerId = t2.id
    AND t1.salary > t2.salary;
