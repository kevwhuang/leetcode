-- 1613 - Find the Missing IDs

WITH RECURSIVE Nums AS (
    SELECT
        1 AS ids
    UNION
    SELECT
        ids + 1
    FROM
        Nums
    WHERE
        ids < (
            SELECT
                MAX(customer_id)
            FROM
                Customers
        )
)
SELECT
    ids
FROM
    Nums
WHERE
    ids NOT IN (
        SELECT
            customer_id
        FROM
            Customers
    );
