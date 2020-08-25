import { ChatRoom } from '../../model/ChatRoom';

export default (req, res) => {
  ChatRoom.findById(req.params._id)
      .populate('users', 'name')
      .populate('messages')
      .then((x) => res.json(x))
      .catch((err) => res.json(err));
};
