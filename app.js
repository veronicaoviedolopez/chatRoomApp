import dotenv from 'dotenv';
import http from 'http';
import path from 'path';
import { ConnectionToDB } from './config/DBConection';
import { ConnectionToSocket } from './config/socket';
import { logger } from './config/logger';
import bodyParser from 'body-parser';
import cors from 'cors';

// Import Routes
import homeRoutes from './routes/homeRoutes';
import authRoutes from './routes/authRoutes';
import usersRoutes from './routes/usersRoutes';
import chatRoomsRoutes from './routes/chatRoomsRoutes';
import express from 'express';

const expressApp = express();
const server = http.createServer(expressApp);
dotenv.config();


const clientPath = path.join(
    path.dirname(__dirname),
    'client',
    'build',
);

// expressApp.use(express.static(clientPath));
expressApp.use(express.static('client/build'));
console.log('__dirname', __dirname);
expressApp.use(express.static(__dirname + '/assets'));

// Connect Database
ConnectionToDB()
    .then(() => logger.info('App connected to DB'))
    .catch((err) => logger.info(err.message));

// Connect Socket
ConnectionToSocket(server);

/* expressApp.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
}); */

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

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client', 'build', 'index.html'));
});



// Start the server
expressApp.use('/api', app);

const PORT = process.env.PORT || 3001;
server.listen(PORT, logger.info('Server up and running on port' + process.env.port) );
export default app;