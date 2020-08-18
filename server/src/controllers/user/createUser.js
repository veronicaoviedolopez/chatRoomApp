import { User } from '../../model/User';
import bcrypt from 'bcryptjs';

export default (req, res) => {
  // Hash passwords
  bcrypt.genSalt(10)
      .then((salt) => {
        return bcrypt.hash(req.body.password, salt);
      })
      .then((hashedPassword) => {
        req.body.password = hashedPassword;

        // Create a newreq.body.password user
        return new User(req.body).save();
      })
      .then(() => res.sendStatus(201))
      .catch((err) => res.status(400).send(err.message));
};
