export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString == '' ) {
    return '';
  }
  const newset = new Set();
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      newset.add(item.slice(startString.length));
    }
  }
  return Array.from(newset).join('-');
}