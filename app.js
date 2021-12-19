import dotenv from 'dotenv';
import express from 'express';
import createError from 'http-errors';
import mongoose from 'mongoose';
import registerRouter from './src/routes/register.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(
  `mongodb+srv://admin:${DB_PASSWORD}@receitas-api.dknac.mongodb.net/receitas-api?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser);

app.use('/register', registerRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`);
});
