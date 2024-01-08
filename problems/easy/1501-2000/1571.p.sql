-- 1571 - Warehouse Manager

SELECT
    W.name AS warehouse_name,
    SUM(W.units * P.length * P.width * P.height) AS volume
FROM
    Warehouse W
    JOIN Products P ON W.product_id = P.product_id
GROUP BY
    warehouse_name;
