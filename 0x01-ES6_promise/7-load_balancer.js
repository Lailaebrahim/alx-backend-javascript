export default function loadBalancer(chinaDownload, USDownload) {
  const promises = [chinaDownload, USDownload];
  const result = Promise.race(promises);
  return result;
}
