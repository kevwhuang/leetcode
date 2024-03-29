-- 1050 - Actors and Directors Who Cooperated at Least Three Times

SELECT
    actor_id,
    director_id
FROM
    ActorDirector
GROUP BY
    actor_id,
    director_id
HAVING
    COUNT(timestamp) >= 3;
