SELECT
	a.Name AS 'Employee'
FROM
	Employee AS a,
	Employee AS b
WHERE
	a.ManagerId = b.Id
	AND b.Salary < a.Salary
