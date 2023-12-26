-- 619 - Biggest Single Number

SELECT
    MAX(num) AS num
FROM
    (
        SELECT
            num
        FROM
            MyNumbers
        GROUP BY
            num
        HAVING
            count(num) = 1
    ) AS uniques;
