-- 1068 - Product Sales Analysis I

SELECT
    P.product_name,
    year,
    price
FROM
    Sales AS S
    JOIN Product AS P ON S.product_id = P.product_id;
