export default function updateStudentGradeByCity(students, city, newGrades) {
  const idMap = {};
  for (const grade of newGrades) idMap[grade.studentId] = grade.grade;
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: idMap[student.id] === undefined ? 'N/A' : idMap[student.id],
    }));
}
