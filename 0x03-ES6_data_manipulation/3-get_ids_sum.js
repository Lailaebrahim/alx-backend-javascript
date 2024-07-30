export default function getStudentIdsSum(stds) {
  if (!Array.isArray(stds)) {
    return 0;
  }
  return stds.reduce((sum, std) => sum + std.id, 0);
}
