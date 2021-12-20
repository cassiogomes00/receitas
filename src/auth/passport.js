import dotenv from 'dotenv';
dotenv.config();

import passport from 'passport';
import passportJwt from 'passport-jwt';
import userModel from '../models/user.js';

const { ExtractJwt, Strategy } = passportJwt;

passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.DB_PASSWORD,
    },
    async (jwtPayload, done) => {
      try {
        const user = await userModel.findOne({ id: jwtPayload.id });
        return done(null, user);
      } catch (err) {
        throw err;
      }
    }
  )
);
