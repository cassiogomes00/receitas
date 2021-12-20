import express from 'express';
import loginUtil from '../utilities/loginUtil.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  const { username, pass } = req.body;

  try {
    const token = await loginUtil.getToken(username, pass);

    res.json({ email: username, token: token });
  } catch (err) {
    next(err);
  }
});

export default router;
