const bodyParser = require('body-parser');
const cors = require('cors');
//Import Routes
const authRoutes =  require('./src/routes/auth');
const usersRoutes = require('./src/routes/users')

// importar y llamar mongo

// Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//Routes Middleware
app.use('/auth', authRoutes);
app.use('/user', [verify, usersRoutes]);

module.exports = app;