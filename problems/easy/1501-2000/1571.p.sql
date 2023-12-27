-- 1571 - Warehouse Manager

SELECT
    W.name AS warehouse_name,
    SUM(W.units * P.length * P.width * P.height) AS volume
FROM
    Warehouse AS W
    JOIN Products AS P ON W.product_id = P.product_id
GROUP BY
    W.name;
