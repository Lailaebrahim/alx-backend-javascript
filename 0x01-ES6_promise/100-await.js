import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const promises = [uploadPhoto(), createUser()];
  const results = await Promise.allSettled(promises);
  for (const result of results) {
    if (result.status === 'rejected') {
      return {
        photo: null,
        user: null,
      }
    }
  }
  return {
    photo: results[0].value,
    user: results[1].value,
  }
}
