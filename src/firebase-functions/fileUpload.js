import app from '../firebase';

export const uploadFile = async (file) => {
  try {
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const fileURL = await fileRef.getDownloadURL();
    return fileURL;
  } catch (error) {
    console.error(error);
  }
};
