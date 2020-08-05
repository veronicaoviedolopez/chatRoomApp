const express = require('express');
const server = express();
const dotenv = require('dotenv');
const app = require('./src/app');

dotenv.config();

// Entry point
server.use('/api', app);

server.listen(3000, () => console.log('Server Up and Running'));
