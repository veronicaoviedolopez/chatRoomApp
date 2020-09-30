import { ChatRoom } from '../../model/ChatRoom';

export default (req, res) => {
  ChatRoom.findById(req.params._id)
      .populate('users', 'username firstname lastname')
      .populate({
        path: 'messages',
        populate: {
          path: 'user_id',
          select: 'username firstname lastname avatar',
        },
      })
      .then((x) => res.json(x))
      .catch((err) => res.json(err));
};
