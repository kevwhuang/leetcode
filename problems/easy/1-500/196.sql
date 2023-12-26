-- 196 - Delete Duplicate Emails

DELETE t2
FROM
    Person t1,
    Person t2
WHERE
    t1.email = t2.email
    and t1.id < t2.id;
