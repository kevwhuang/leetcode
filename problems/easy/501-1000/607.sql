-- 607 - Sales Person

SELECT
    S.name
FROM
    Orders O
    JOIN Company C ON O.com_id = C.com_id
    AND C.name = 'RED'
    RIGHT JOIN SalesPerson S USING(sales_id)
WHERE
    O.amount IS NULL;
