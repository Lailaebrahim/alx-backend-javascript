export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const cond = true;
    if (cond) {
      resolve('Success'); // Replace 'Success' with whatever value you want to resolve with
    } else {
      reject(new Error('Failed')); // It's good practice to reject with an Error object
    }
  });
}
