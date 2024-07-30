export default function getStudentsByLocation(stds, city) {
  if (!Array.isArray(stds)) {
    return [];
  }
  return stds.filter((std) => std.location === city);
}
