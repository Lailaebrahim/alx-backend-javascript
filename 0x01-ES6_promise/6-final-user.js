import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';
 /*
 * 1- async before the function declaration allows the use of await inside the function
  and ensures the function returns a Promise.
 * 2- await before Promise.allSettled(promises):
    Pauses the function execution until Promise.allSettled() completes.
    When Promise.allSettled() resolves, await unwraps its resolved value and assigns it to results.
    Without await, results would be a Promise object instead of the actual array of results.
    Both signUpUser() and uploadPhoto() start executing immediately and run concurrently.
    Promise.allSettled() waits for both promises to settle, regardless of order. */
export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  const results = await Promise.allSettled(promises);

  return results.map((result) => ({
    status: result.status,
    /*first result is the return of the first promise which is the object passed to resolve and can be a string
    * second result is the result of the second promise which is the error object passed to reject so converts the rejection reason to a string */
    value: result.status === 'fulfilled' ? result.value : String(result.reason),
  }));
}
