import mongoose from 'mongoose';

const chatRoomSchema = {
  name: {
    type: String,
    required: true,
    max: 50,
    unique: [true, 'Name field is required'],
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true, ref: 'User',
    },
  ],
};

export const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);
