import express from 'express';
import BookingDetails from '../Models/BookingDetails';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newBooking = new BookingDetails(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json({message : 'Booked Successfully', data:savedBooking});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
