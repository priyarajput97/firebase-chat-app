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

export const getAllUsers = async (currentUserUid) => {
  try {
    let users = [];
    const usersRef = db.collection('users');
    const snapshot = await usersRef.get();
    snapshot.forEach((doc) => {
      if (doc.id !== currentUserUid) {
        users.push(doc.data());
      }
    });
    return users;
  } catch (error) {
    console.error(error);
  }
};
