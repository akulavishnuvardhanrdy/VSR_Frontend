import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import process from 'process'; 
import BookingDetailsRoutes from '../API_Routes/BookingDetailsRoutes'
import LoginDetailsRoutes from '../API_Routes/LoginDetailsRoutes'

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use('/booking', BookingDetailsRoutes);
app.use('/addUsers', LoginDetailsRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
