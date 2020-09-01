import { Message } from '../../model/Message';
import { ChatRoom } from '../../model/ChatRoom';

export default async (req, res) => {
  try {
    const newMessage = await new Message(req.body).save();
    await ChatRoom.findByIdAndUpdate(req.body.chatroom_id,
        { $push: { messages: newMessage._id } },
        { new: true, upsert: true });
    return res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
