import { ChatRoom } from '../../model/ChatRoom';
import { User } from '../../model/User';

export default (req, res) => {
  new ChatRoom(req.body).save()
      .then((chatroom) => {
        return User.findByIdAndUpdate(req.body.users,
            { $push: { chatRooms: chatroom._id } });
      })
      .then(()=> res.sendStatus(201))
      .catch((err) => res.status(400).send(err.message));
};
