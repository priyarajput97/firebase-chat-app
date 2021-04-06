export const validateUsername = (username) => {
  return username.includes(' ') ? true : false;
};
