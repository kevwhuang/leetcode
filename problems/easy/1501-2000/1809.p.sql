-- 1809 - Ad-Free Sessions

SELECT
    session_id
FROM
    Playback AS P
    LEFT JOIN Ads AS A ON P.customer_id = A.customer_id
    AND timestamp BETWEEN start_time
    AND end_time
WHERE
    ad_id IS NULL;
