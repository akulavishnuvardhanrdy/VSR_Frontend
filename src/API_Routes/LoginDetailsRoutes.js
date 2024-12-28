import express from 'express';
import Users from '../Models/Users';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newUser = new Users(req.body);
    const savedUser = await newUser.save();
    res.status(201).json({message : 'Booked Successfully', data:savedUser});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
