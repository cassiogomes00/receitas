import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'cu' });
});

router.post('/', (req, res) => {});

export default router;
