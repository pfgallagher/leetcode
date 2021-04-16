class Employee {
	id: number;
	importance: number;
	subordinates: number[];
	constructor(id: number, importance: number, subordinates: number[]) {
		this.id = id === undefined ? 0 : id;
		this.importance = importance === undefined ? 0 : importance;
		this.subordinates = subordinates === undefined ? [] : subordinates;
	}
}

const getEmployeeById = (employees: Employee[], id: number): Employee =>
	employees.find(({ id: employeeId }) => id === employeeId) as Employee;

const findSubordinates = (
	employee: Employee,
	employees: Employee[],
): Employee[] =>
	employee?.subordinates?.length
		? [
				employee,
				...employee.subordinates.flatMap(subId =>
					findSubordinates(getEmployeeById(employees, subId), employees),
				),
		  ]
		: [employee];

const GetImportance = (employees: Employee[], id: number): number =>
	findSubordinates(getEmployeeById(employees, id), employees).reduce(
		(acc, { importance }) => acc + importance,
		0,
	);
