-- 1517 - Find Users With Valid Emails

SELECT
    user_id,
    name,
    mail
FROM
    Users
WHERE
    REGEXP_LIKE(mail, '^[A-Za-z][A-Za-z0-9_.-]*@leetcode[.]com$') = 1;
