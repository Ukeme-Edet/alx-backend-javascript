export default function getListStudentIds(studendts) {
  return Array.isArray(studendts)
    ? studendts.map((student) => student.id)
    : [];
}
