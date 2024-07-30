export default function updateUniqueItems(groceriesList) {
  if (!(groceriesList instanceof Map)) {
    throw new Error('Cannot process');
  }
  
  const newmap = new Map(groceriesList)
  
  for (const [key, value] of newmap) {
    if (value === 1) {
      newmap.set(key, 100);
    }
  }
  
  return newmap;
}
