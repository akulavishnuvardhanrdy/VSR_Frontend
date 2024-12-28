// src/Backend/APIFunctions.js
import Users from './src/Models/Users';  // Adjust path to your Users model
import BookingDetails from '.src/Models/BookingDetails';  // Adjust path to your BookingDetails model

// Register route handler
export const Register = async (req, res) => {
  try {
    const newUser = new Users(req.body);
    const savedUser = await newUser.save();
    res.status(201).json({ message: 'Registered Successfully', data: savedUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Booking route handler
export const Booking = async (req, res) => {
  try {
    const newBooking = new BookingDetails(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json({ message: 'Booked Successfully', data: savedBooking });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
