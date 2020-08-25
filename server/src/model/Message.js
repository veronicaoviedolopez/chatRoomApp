
import mongoose from 'mongoose';

const messageSchema = {
  message: {
    type: String,
    required: true,
    max: 200,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true, ref: 'User',
  },
  chatroom_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true, ref: 'ChatRoom',
  },
  date: {
    type: Date,
    default: Date.now,
  },
};

export const Message = mongoose.model('Message', messageSchema);
