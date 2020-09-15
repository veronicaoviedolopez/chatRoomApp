import { Message } from '../../model/Message';
import { ChatRoom } from '../../model/ChatRoom';

export default async (req, res) => {
  try {
    const newMessage = await new Message(req.body).save();
    await ChatRoom.findByIdAndUpdate(req.body.chatroom_id,
        { $push: { messages: newMessage._id } },
        { new: true, upsert: true });
    const msg = await Message.findById(newMessage._id)
        .populate('user_id', 'username firstname lastname, avatar');
    return res.status(201).json(msg);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
