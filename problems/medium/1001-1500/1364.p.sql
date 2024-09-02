-- 1364 - Number of Trusted Contacts of a Customer

SELECT
    invoice_id,
    customer_name,
    price,
    contacts_cnt,
    trusted_contacts_cnt
FROM
    Invoices
    LEFT JOIN (
        SELECT
            customer_id,
            customer_name,
            COUNT(contact_name) AS contacts_cnt,
            COUNT(T1.email) AS trusted_contacts_cnt
        FROM
            Customers
            LEFT JOIN (
                SELECT
                    user_id,
                    contact_name,
                    email
                FROM
                    Contacts
                    LEFT JOIN Customers ON contact_email = email
            ) T1 ON customer_id = user_id
        GROUP BY
            customer_id
    ) T2 ON user_id = customer_id
ORDER BY
    invoice_id;
