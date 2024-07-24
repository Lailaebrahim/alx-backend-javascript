export default function iterateThroughObject(reportWithIterator) {
  let allemp = '';
  for (const emp of reportWithIterator) {
    allemp += `${emp} | `;
  }
  return allemp.slice(0, -3);
}
