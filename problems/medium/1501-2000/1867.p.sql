-- 1867 - Orders With Maximum Quantity Above Average

SELECT
    order_id
FROM
    OrdersDetails
GROUP BY
    order_id
HAVING
    MAX(quantity) > (
        SELECT
            SUM(quantity) / COUNT(*)
        FROM
            OrdersDetails
        GROUP BY
            order_id
        ORDER BY
            1 DESC
        LIMIT
            1
    );
