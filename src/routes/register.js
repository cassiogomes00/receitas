import express from 'express';
import registerUtil from '../utilities/registerUtil.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  console.log('post /register');
  const { username, pass } = req.body;

  try {
    const user = await registerUtil.createUser(username, pass);
    // const user = registerUtil.findUser(username);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

export default router;
