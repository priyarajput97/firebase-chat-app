import { db } from '../firebase';

export const createUser = async (uid, email) => {
  try {
    await db.collection('users').doc(uid).set({
      email,
      uid,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateUserDetails = async (uid, updatedFields) => {
  try {
    const userRef = db.collection('users').doc(uid);
    await userRef.set(updatedFields, { merge: true });
  } catch (error) {
    console.error(error);
  }
};
