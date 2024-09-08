-- 574 - Winning Candidate

SELECT
    name
FROM
    Candidate C
    JOIN Vote V ON C.id = candidateId
GROUP BY
    candidateId
ORDER BY
    COUNT(*) DESC
LIMIT
    1;
