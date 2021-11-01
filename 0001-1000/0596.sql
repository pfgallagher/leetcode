SELECT
	class
FROM
	courses
GROUP BY
	class
HAVING
	5 <= COUNT(DISTINCT student)
