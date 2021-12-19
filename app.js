import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import createError from 'http-errors';
import registerRouter from './src/routes/register.js';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser);

app.use('/register', registerRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
});

app.listen(port, () => {
  console.log(`Starting server on port ${port}`);
});
