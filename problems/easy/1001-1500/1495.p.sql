-- 1495 - Friendly Movies Streamed Last Month

SELECT
    DISTINCT title
FROM
    TVProgram AS T
    JOIN Content AS C ON T.content_id = C.content_id
    AND program_date LIKE '2020-06%'
    AND Kids_content = 'Y'
    AND content_type = 'Movies';
