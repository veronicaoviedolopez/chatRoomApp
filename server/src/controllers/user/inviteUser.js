import { ChatRoom } from '../../model/ChatRoom';
import { User } from '../../model/User';

export default async (req, res) => {
  try {
    await ChatRoom.findByIdAndUpdate(req.params.chatroom_id,
        { $push: { users: req.params.user_id } });
    await User.findByIdAndUpdate(req.params.user_id,
        { $push: { chatRooms: req.params.chatroom_id } });
    return res.sendStatus(201);
  } catch (err) {
    res.status(500).json(err);
  }
};
