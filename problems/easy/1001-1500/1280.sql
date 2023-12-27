-- 1280 - Students and Examinations

SELECT
    student_id,
    student_name,
    subject_name,
    COUNT(E.student_id) attended_exams
FROM
    Students
    JOIN Subjects
    LEFT JOIN Examinations E USING (student_id, subject_name)
GROUP BY
    2,
    3
ORDER BY
    1,
    3;
