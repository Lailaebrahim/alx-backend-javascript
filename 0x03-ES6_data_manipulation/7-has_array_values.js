export default function hasValuesFromArray(set, array) {
  let status = false;
  if (!(set instanceof Set) || !Array.isArray(array)) {
    return false;
  }
  for (const item of array) {
    if (set.has(item)) {
      status = true;
    } else {
      return false;
    }
  }
  return status;
}
