export default function getStudentIdsSum(students) {
  return Array.isArray(students)
    ? students.reduce((sum, student) => sum + student.id, 0)
    : 0;
}
