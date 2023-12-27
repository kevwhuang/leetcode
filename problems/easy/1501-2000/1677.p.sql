-- 1677 - Product's Worth Over Invoices

SELECT
    name,
    COALESCE(SUM(rest), 0) AS rest,
    COALESCE(SUM(paid), 0) AS paid,
    COALESCE(SUM(canceled), 0) AS canceled,
    COALESCE(SUM(refunded), 0) AS refunded
FROM
    Product
    LEFT JOIN Invoice USING(product_id)
GROUP BY
    1
ORDER BY
    1;
