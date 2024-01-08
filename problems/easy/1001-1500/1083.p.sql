-- 1083 - Sales Analysis II

SELECT
    S.buyer_id
FROM
    Product P
    JOIN Sales S USING(product_id)
GROUP BY
    S.buyer_id
HAVING
    SUM(P.product_name = 'S8') > 0
    AND SUM(P.product_name = 'iPhone') = 0;
