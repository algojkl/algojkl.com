import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import loginRoute from './routes/login.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/login', loginRoute);

const PORT = process.env.PORT || 5042;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
