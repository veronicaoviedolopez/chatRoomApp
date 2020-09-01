import mongoose from 'mongoose';

const userSchema = ({
  firstname: {
    type: String,
    required: [true, 'Firstname field is required'],
    min: 3,
    max: 50,
  },
  lastname: {
    type: String,
    required: [true, 'Lastname field is required'],
    min: 3,
    max: 20,
  },
  username: {
    type: String,
    required: [true, 'Username field is required'],
    min: 3,
    max: 20,
    unique: [true, 'Username field is unique'],
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 20,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avatar: {
    type: String,
  },
  chatRooms: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: 'ChatRoom',
    },
  ],
});

export const User = mongoose.model('User', userSchema);
