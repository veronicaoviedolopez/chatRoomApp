import { ChatRoom } from '../../model/ChatRoom';

export default (req, res) => {
  ChatRoom.findById(req.params._id)
      .populate('messages')
      .select('messages')
      .then((x) => res.json(x))
      .catch((err) => res.json(err));
};
