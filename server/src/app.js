import bodyParser from 'body-parser';
import cors from'cors';

//Import Routes
import authRoutes from './routes/authRoutes';
import usersRoutes from './routes/usersRoutes';
import express from 'express';

const app = express();

// Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//Routes Middleware
app.use('/auth', authRoutes);
app.use('/user', usersRoutes);

export default app;