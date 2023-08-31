-- 197 - Rising Temperature

SELECT
    W2.id
FROM
    Weather AS W1
    JOIN Weather AS W2 ON DATEDIFF(W1.recordDate, W2.recordDate) = -1
WHERE
    W2.temperature > W1.temperature;