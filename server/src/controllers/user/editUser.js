import { User } from '../../model/User';
import { hashPassword } from '../../middlewares/hashPassword';
import bcrypt from 'bcryptjs';

export default (req, res) => {
  if (req.body.password) {
    // hashPassword(req.body.password)
    bcrypt.genSalt(Number(process.env.numeroSalt))
        .then((salt) => bcrypt.hash(req.body.password, salt))
        .then((hashedPassword) => {
          req.body.password = hashedPassword;
          User.findByIdAndUpdate(req.params._id, req.body,
              { new: true, select: '-chatRooms -password' })
              .then((updatedUser) => res.status(200).json(updatedUser))
              .catch((err) => res.status(304).json(err));
        });
  } else {
    User.findByIdAndUpdate(req.params._id, req.body,
        { new: true, select: '-chatRooms -password' })
        .then((updatedUser) => res.status(200).json(updatedUser))
        .catch((err) => res.status(304).json(err));
  };
};

/* const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params._id, req.body,
        { new: true, select: '-chatRooms -password' });
    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(304).json(err);
  }
}; */
