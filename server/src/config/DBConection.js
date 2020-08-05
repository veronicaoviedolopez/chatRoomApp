const mongoose = require('mongoose');

// Connect to BD
mongoose.connect( process.env.DB_CONNECT, 
  {   useNewUrlParser: true , 
      useUnifiedTopology: true  }, 
  () => console.log('Connected to DB!')
);