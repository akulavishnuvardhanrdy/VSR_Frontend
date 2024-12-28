// BackendServer.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './DbConnection'; // Import DB connection
import { Register, Booking } from './APIFunctions'; // Import route handlers

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

// Connect to the database
connectDB();

// Define routes
app.post('/register', Register);
app.post('/booking', Booking);

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
