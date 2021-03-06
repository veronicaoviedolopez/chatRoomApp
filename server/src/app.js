import bodyParser from 'body-parser';
import cors from 'cors';

// Import Routes
import homeRoutes from './routes/homeRoutes';
import authRoutes from './routes/authRoutes';
import usersRoutes from './routes/usersRoutes';
import chatRoomsRoutes from './routes/chatRoomsRoutes';
import express from 'express';

const app = express();

// Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Routes Middleware
app.use('/', homeRoutes);
app.use('/auth', authRoutes);
app.use('/user', usersRoutes);
app.use('/chatroom', chatRoomsRoutes);

export default app;
