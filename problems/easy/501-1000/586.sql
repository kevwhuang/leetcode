-- 586 - Customer Placing the Largest Number of Orders

SELECT
    customer_number
FROM
    Orders
GROUP BY
    customer_number
ORDER BY
    COUNT(*) DESC
LIMIT
    1;
