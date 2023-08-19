-- 1587 - Bank Account Summary II

SELECT
    U.name,
    SUM(T.amount) AS balance
FROM
    Users U
    JOIN Transactions T ON U.account = T.account
GROUP BY
    name
HAVING
    balance > 10000;