import { User } from '../../model/User';

export default (req, res) => {
  User.findById(req.params._id).populate('chatRooms')
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
};
