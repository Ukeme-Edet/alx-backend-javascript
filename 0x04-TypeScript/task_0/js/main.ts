export interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentsList: Student[] = [
	{ firstName: "John", lastName: "Doe", age: 25, location: "USA" },
	{ firstName: "Jane", lastName: "Doe", age: 24, location: "UK" },
];

console.log("Name\t\tLocation");
studentsList.forEach((student) => {
	console.log(`${student.firstName}\t\t${student.location}`);
});
