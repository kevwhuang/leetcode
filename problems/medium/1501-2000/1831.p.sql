-- 1831 - Maximum Transaction Each Day

SELECT
    transaction_id
FROM
    Transactions
WHERE
    (DATE(day), amount) IN (
        SELECT
            DATE(day),
            MAX(amount)
        FROM
            Transactions
        GROUP BY
            DATE(day)
    )
ORDER BY
    1;
