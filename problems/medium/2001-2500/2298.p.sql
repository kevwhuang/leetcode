-- 2298 - Tasks Count in the Weekend

SELECT
    SUM(IF(WEEKDAY(submit_date) >= 5, 1, 0)) AS weekend_cnt,
    SUM(IF(WEEKDAY(submit_date) <= 4, 1, 0)) AS working_cnt
FROM
    Tasks;
