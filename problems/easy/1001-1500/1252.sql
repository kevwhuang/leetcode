-- 1251 - Average Selling Price

SELECT
    U.product_id,
    ROUND(SUM(price * units) / SUM(units), 2) AS average_price
FROM
    UnitsSold AS U
    JOIN Prices AS P ON U.product_id = P.product_id
    AND U.purchase_date BETWEEN P.start_date
    AND P.end_date
GROUP BY
    U.product_id;