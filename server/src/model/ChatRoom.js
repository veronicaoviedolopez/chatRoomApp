import mongoose from 'mongoose';

const chatRoomSchema = {
  name: {
    type: String,
    required: true,
    min: 6,
    max: 50,
    unique: [true, 'Name field is required'],
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  ],
};

export const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);
