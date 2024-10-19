-- 3156 - Employee Task Duration and Concurrent Tasks

WITH CTE AS (
    SELECT
        T1.employee_id,
        SUM(
            IF(
                T1.task_id = T2.task_id,
                TIMESTAMPDIFF(SECOND, T1.start_time, T1.end_time),
                - TIMESTAMPDIFF(SECOND, T2.start_time, T1.end_time)
            )
        ) AS seconds,
        COUNT(*) AS concurrent
    FROM
        Tasks T1,
        Tasks T2
    WHERE
        T1.employee_id = T2.employee_id
        AND T1.start_time <= T2.start_time
        AND T1.end_time > T2.start_time
    GROUP BY
        employee_id,
        T1.task_id
)
SELECT
    employee_id,
    FLOOR(SUM(seconds) / 3600) AS total_task_hours,
    MAX(concurrent) AS max_concurrent_tasks
FROM
    CTE
GROUP BY
    employee_id
ORDER BY
    employee_id;
