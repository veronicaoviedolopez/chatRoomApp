import { Message } from '../../model/Message';
import { ChatRoom } from '../../model/ChatRoom';

export default (req, res) => {
  new Message(req.body).save()
      .then((message) => {
        return ChatRoom.findByIdAndUpdate(req.body.chatroom_id,
            { $push: { messages: message._id } },
            { new: true, upsert: true, select: 'messages' });
      })
      .then((r) => ChatRoom.find({ _id: r.messages[r.messages.length-1] }))
      .then((r)=> res.status(201).json(r))
      .catch((err) => res.status(400).send(err.message));
};
