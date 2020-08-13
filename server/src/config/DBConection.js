import mongoose from 'mongoose';

// Connect to BD
export const ConnectionToDB = () => {
  return mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true },
  );
};
