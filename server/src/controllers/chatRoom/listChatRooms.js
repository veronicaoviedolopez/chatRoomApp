import { ChatRoom } from '../../model/ChatRoom';

export default (req, res) => {
  ChatRoom.find()
      .then((x) => res.json(x))
      .catch((err) => res.json(err));
};
