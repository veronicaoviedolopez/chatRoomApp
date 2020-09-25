import express from 'express';
import dotenv from 'dotenv';
import app from './app';
import http from 'http';
import path from 'path';
import { ConnectionToDB } from './config/DBConection';
import { ConnectionToSocket } from './config/socket';
import { logger } from './config/logger';

const expressApp = express();
const server = http.createServer(expressApp);

dotenv.config();

// Start the server
expressApp.use('/api', app);

//if (process.env.NODE_ENV === 'production') {
  expressApp.use(express.static('client/build'));
//}

expressApp.use(express.static(__dirname + '/assets'));
server.listen(process.env.port, () =>
  logger.info('Server up and running on port' + process.env.port));

// Connect Database
ConnectionToDB()
    .then(() => logger.info('App connected to DB'))
    .catch((err) => logger.info(err.message));

// Connect Socket
ConnectionToSocket(server);

/* expressApp.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
}); */
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
});
