const displayName = (name) => {
  const error = { status: 400, message: '"displayName" length must be at least 8 characters long' };
  if (typeof name !== 'string' || name.length < 8) throw error;
  return true;
};

const email = (emailStr) => {
  const regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const invalidationError = { status: 400, message: '"email" must be a valid email' };
  const noEmailError = { status: 400, message: '"email" is required' };
  if (typeof emailStr !== 'string') throw noEmailError;
  if (!regex.test(emailStr)) throw invalidationError;
  return true;
};

const password = (passwd) => {
  const lengthError = { status: 400, message: '"password" length must be 6 characters long' };
  const noPasswdError = { status: 400, message: '"password" is required' };
  if (typeof passwd !== 'string') throw noPasswdError;
  if (passwd.length !== 6) throw lengthError;
  return true;
};

const loginPassword = (passwd) => {
  const lengthError = { status: 400, message: '"password" is not allowed to be empty' };
  const noPasswdError = { status: 400, message: '"password" is required' };
  if (typeof passwd !== 'string') throw noPasswdError;
  if (passwd === '') throw lengthError;
  return true;
};

const loginEmail = (emailStr) => {
  const invalidationError = { status: 400, message: '"email" is not allowed to be empty' };
  const noEmailError = { status: 400, message: '"email" is required' };
  if (typeof emailStr !== 'string') throw noEmailError;
  if (emailStr === '') throw invalidationError;
  return true;
};

module.exports = { displayName, email, password, loginPassword, loginEmail };