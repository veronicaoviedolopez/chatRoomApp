import express from 'express';
import dotenv from 'dotenv';
import app from './src/app';
import http from 'http';
import path from 'path';
import { ConnectionToDB } from './src/config/DBConection';
import { ConnectionToSocket } from './src/config/socket';
import { logger } from './src/config/logger';

const expressApp = express();
const server = http.createServer(expressApp);

dotenv.config();

// Start the server
expressApp.use('/api', app);

const clientPath = path.join(
    path.dirname(__dirname),
    'client',
    'build',
);

// expressApp.use(express.static(clientPath));
expressApp.use(express.static('client/build'));
console.log('__dirname', __dirname);
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
