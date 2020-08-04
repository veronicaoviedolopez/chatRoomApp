const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Import Routes
const authRoutes =  require('./routes/auth');
const usersRoutes = require('./routes/users')

dotenv.config();

// Connect to BD
mongoose.connect( process.env.DB_CONNECT, 
    {   useNewUrlParser: true , 
        useUnifiedTopology: true  }, 
    () => console.log('Connected to DB!')
);

// Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


//Routes Middleware
 app.use('/api/user', authRoutes);
 app.use('/api/user', usersRoutes);

app.listen(3000, () => console.log('Server Up and Running'));
