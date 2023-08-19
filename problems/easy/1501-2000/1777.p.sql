-- 1777 - Product's Price for Each Store

SELECT
    product_id,
    SUM(IF(store = 'store1', price, NULL)) store1,
    SUM(IF(store = 'store2', price, NULL)) store2,
    SUM(IF(store = 'store3', price, NULL)) store3
FROM
    Products
GROUP BY
    1;