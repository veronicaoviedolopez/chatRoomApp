import { User } from '../../model/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default (req, res) => {
  // Checking if the name exists
  User.findOne({ name: req.body.name })
      .then((user) => {
        if (!user) {
          Promise.reject('User not found');
        }

        // Checking if the password is correct
        const validPass = bcrypt.compare(req.body.password, user.password);

        if (!validPass) {
          return res.status(401)
              .json({ message: 'Username or password is wrong' });
        }

        req.body.password = null;

        // Create and assign a token
        const token = jwt.sign(req.body, process.env.JWTSecret);

        return res.status(200).json(token);
      })
      .catch(() => res.status(401)
          .json({ message: 'findOne Username or password is wrong' }));
};
