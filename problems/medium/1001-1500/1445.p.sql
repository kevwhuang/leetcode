-- 1445 - Apples & Oranges

SELECT
    sale_date,
    SUM(IF(fruit = 'apples', sold_num, -sold_num)) AS diff
FROM
    Sales
GROUP BY
    sale_date;
