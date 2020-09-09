import { ChatRoom } from '../../model/ChatRoom';
import { User } from '../../model/User';

export default (req, res) => {
  new ChatRoom(req.body).save()
      .then((chatroom) => {
        return User.findByIdAndUpdate(req.body.users,
            { $push: { chatRooms: chatroom._id } },
            { new: true, upsert: true, select: 'chatRooms' });
      })
      .then((r) => ChatRoom.findById( r.chatRooms[r.chatRooms.length-1])
          .populate('users', 'username firstname lastname')
          .populate({
            path: 'messages',
            populate: {
              path: 'user_id',
              select: 'username firstname lastname, avatar',
            },
          }))
      .then((r)=> res.status(201).json(r))
      .catch((err) => res.status(400).send(err.message));
};
