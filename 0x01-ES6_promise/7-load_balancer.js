export default function loadBalancer(chinaDownload, USDownload) {
  const promises = [chinaDownload, USDownload];
  let result = Promise.race(promises);
  return result;
}
