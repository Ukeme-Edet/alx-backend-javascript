import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (err) {
    return console.log('Signup system offline');
  }
}
