import express from 'express';
const router = express.Router();

router.get('/temp', (req, res) => {
  res.status(201).send('Temp Route Hit');
});

export default router;
