import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send('cu');
  }
);

export default router;
