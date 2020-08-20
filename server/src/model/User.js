import mongoose from 'mongoose';

const userSchema = ({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 50,
    unique: [true, 'Name field is required'],
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 100,
    unique: [true, 'Email field is required'],
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  chatRooms: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: 'ChatRoom',
    },
  ],
});

export const User = mongoose.model('User', userSchema);
