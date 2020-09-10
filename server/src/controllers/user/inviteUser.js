import { ChatRoom } from '../../model/ChatRoom';
import { User } from '../../model/User';

export default async (req, res) => {
  try {
    // Validate if chatroom exists
    // Validate if user exists
    // Validate if user is already in the chatroom

    await ChatRoom.findOneAndUpdate({
      _id: req.params.chatroom_id,
      users: {
        '$ne': req.params.user_id,
      },
    }, {
      $addToSet: {
        users: req.params.user_id,
      },
    }, {
      new: true,
    });
    await User.findOneAndUpdate({
      _id: req.params.user_id,
      chatRooms: {
        '$ne': req.params.chatroom_id,
      },
    }, {
      $addToSet: {
        chatRooms: req.params.chatroom_id,
      },
    });
    return res.sendStatus(201);
  } catch (err) {
    res.status(500).json(err);
  }
};
