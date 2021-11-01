SELECT
	Email
FROM
	Person
GROUP BY
	Email
HAVING
	1 < COUNT(Email)
