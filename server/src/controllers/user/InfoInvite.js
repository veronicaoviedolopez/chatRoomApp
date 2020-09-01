import { User } from '../../model/User';

export default async (req, res) => {
  User.find( { _id: req.params._id,
    chatrooms: '5f497cc39b894f7e78aac3b9' },
  '-password')
      .populate('chatRooms', 'name')
      .then((user) => res.json(user))
      .error((err) => res.status(500).json(err));
};
