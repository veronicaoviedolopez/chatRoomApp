import { User } from '../../model/User';

export default async (req, res) => {
  User.findOne( { _id: req.params._id }, '-password')
      .populate('chatRooms', 'name', { _id: req.params._idchatroom })
      .then((user) => res.json(user))
      .error((err) => res.status(500).json(err));
};
