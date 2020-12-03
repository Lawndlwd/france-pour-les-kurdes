export const uppercase = (password) => {

  // Minimum of 1 Uppercase Letter
  if (false === /[A-Z]/.test(password)) return false;
  return true;
};

export const number = (password) => {

  // Minimum of 1 Number
  if (false === /\d/.test(password)) return false;
  return true;
};

