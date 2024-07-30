export default function updateStudentGradeByCity(stds, city, newGrades) {
  if (!Array.isArray(stds) || !Array.isArray(newGrades)) {
    return [];
  }
  return stds
    .filter((std) => std.location === city)
    .map((std) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === std.id);
      return {
        ...std,
        grade: matchingGrade ? matchingGrade.grade : 'N/A'
      };
    });
}
