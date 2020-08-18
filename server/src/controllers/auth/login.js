import { User } from '../../model/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default (req, res) => {
  // Checking if the user exists
  User.findOne({ name: req.body.name })
      .then((user) => {
        if (!user) {
          return res.status(404).send('User dont exist');
        }
        // Checking if the password is correct
        bcrypt.compare(req.body.password, user.password).then((result) => {
          if (result) {
            req.body.password = null;
            // Create and assign a token
            const token = jwt.sign(req.body, process.env.JWTSecret);
            return res.status(200).json(token);
          } else {
            return res.status(401).send('Username or password is wrong');
          }
        });
      })
      .catch(() => res.status(401).send('Username or password is wrong'));
};
