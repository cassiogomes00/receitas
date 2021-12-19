import UserModel from '../models/user.js';

async function createUser(email, password) {
  try {
    const user = new UserModel({ email, password });

    await user.save();

    return await findUser(email);
  } catch (err) {
    throw err;
  }
}

async function findUser(email) {
  try {
    const user = await UserModel.find({ email: email });
    return user;
  } catch (err) {
    throw err;
  }
}

async function userExists(email) {
  const user = await findUser(email);

  console.log(user.length !== 0);
  return user.length !== 0;
}

export default { createUser, findUser };
