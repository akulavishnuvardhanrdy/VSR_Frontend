import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); 
const app = express();
const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 4000; 
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(port, () => console.log(`Server running on port ${port}`));
