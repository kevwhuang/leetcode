-- 177 - Nth Highest Salary

CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT BEGIN
SET
    N = N -1;
RETURN (
    SELECT
        DISTINCT salary
    FROM
        Employee
    ORDER BY
        1 DESC
    LIMIT
        1 OFFSET N
);
END
