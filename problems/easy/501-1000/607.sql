-- 607 - Sales Person

SELECT
    S.name
FROM
    Orders AS O
    JOIN Company AS C ON O.com_id = C.com_id
    AND C.name = 'RED'
    RIGHT JOIN SalesPerson AS S USING(sales_id)
WHERE
    O.amount IS NULL;