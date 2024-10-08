-- 2893 - Calculate Orders Within Each Interval

SELECT
    CEIL(minute / 6) AS interval_no,
    SUM(order_count) AS total_orders
FROM
    Orders
GROUP BY
    interval_no
ORDER BY
    interval_no;
