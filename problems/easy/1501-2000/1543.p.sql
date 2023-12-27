-- 1543 - Fix Product Name Format

SELECT
    TRIM(LOWER(product_name)) AS product_name,
    LEFT(sale_date, 7) AS sale_date,
    COUNT(*) AS total
FROM
    Sales
GROUP BY
    TRIM(LOWER(product_name)),
    LEFT(sale_date, 7)
ORDER BY
    product_name,
    sale_date;
