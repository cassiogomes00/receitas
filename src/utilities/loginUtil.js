import jwt from 'jsonwebtoken';
import UserModel from '../models/user.js';

async function findUser(email, password) {
  try {
    const user = await UserModel.find({ email: email, password: password });
    return user;
  } catch (err) {
    throw err;
  }
}

async function userExists(email, password) {
  const user = await findUser(email, password);

  console.log(user.length !== 0);
  return user.length !== 0;
}

async function getToken(email, password) {
  if (userExists(email, password)) {
    try {
      const user = UserModel.findOne({ email, password });
      const jwtToken = jwt.sign(
        { id: user.id, email: user.email },
        process.env.DB_PASSWORD
      );

      return jwtToken;
    } catch (err) {
      throw err;
    }

    throw new Error('Usuário inválido');
  }
}

export default { getToken };
