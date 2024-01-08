-- 1623 - All Valid Triplets That Can Represent a Country

SELECT
    A.student_name AS member_A,
    B.student_name AS member_B,
    C.student_name AS member_C
FROM
    SchoolA A,
    SchoolB B,
    SchoolC C
WHERE
    A.student_id <> B.student_id
    AND A.student_id <> C.student_id
    AND B.student_id <> C.student_id
    AND A.student_name <> B.student_name
    AND A.student_name <> C.student_name
    AND B.student_name <> C.student_name;
