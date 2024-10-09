export interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[index: string]: any;
}

export interface Directors extends Teacher {
	numberOfReports: number;
}

export interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (
	firstName: string,
	lastName: string
): string => {
	return `${firstName.charAt(0)}. ${lastName}`;
};
export interface StudentClassConstructor {
	new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

export class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework(): string {
		return "Currently working";
	}
	displayName(): string {
		return this.firstName;
	}
}
