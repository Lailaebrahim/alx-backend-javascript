export default function updateStudentGradeByCity(stds, city, newGrades) {
  if (!Array.isArray(stds) || !Array.isArray(newGrades)) {
    return [0];
  }
  return stds
    .filter((std) => std.location === city)
    .map((std) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === std.id);
      if (matchingGrade) {
        std.grade = matchingGrade.grade;
      } else {
        std.grade = 'N/A';
      }
      return std;
    });
}
