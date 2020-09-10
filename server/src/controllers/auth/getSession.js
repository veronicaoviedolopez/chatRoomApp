import { User } from '../../model/User';

export default (req, res) => {
  // Checking if the user exists
  User.findOne({ username: req.body.username }).populate('chatRooms')
      .then((user) => {
        if (!user) {
          return res.status(404).send('Session -> User dont exist');
        }
        user.password = null;
        return res.status(200).json({ user });
      })
      .catch(() => res.status(401).send('Username or password is wrong'));
};
