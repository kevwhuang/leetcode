-- 578 - Get Highest Answer Rate Question

SELECT
    question_id AS survey_log
FROM
    SurveyLog
GROUP BY
    survey_log
ORDER BY
    SUM(IF(action = 'answer', 1, 0)) / SUM(IF(action = 'show', 1, 0)) DESC,
    survey_log
LIMIT
    1;
