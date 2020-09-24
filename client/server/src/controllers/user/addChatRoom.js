import { User } from '../../model/User';

export default (req, res) => {
  User.findByIdAndUpdate(req.params.id,
      { $push: { chatRooms: req.body.chatRooms } })
      .then((updatedUser) => res.status(200).json(updatedUser))
      .catch((err) => res.status(304).json(err) );
};
