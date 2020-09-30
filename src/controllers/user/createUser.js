import { User } from '../../model/User';
import bcrypt from 'bcryptjs';
import { getRandomAvatar } from './getRandomAvatar';

export default (req, res) => {
  // Hash passwords
  bcrypt.genSalt(Number(process.env.numeroSalt))
      .then((salt) => {
        return bcrypt.hash(req.body.password, salt);
      })
      .then((hashedPassword) => {
        req.body.password = hashedPassword;

        // Asigna un avatar aleatorio
        req.body.avatar = getRandomAvatar();

        // Create a newreq.body.password user
        return new User(req.body).save();
      })
      .then(() => res.sendStatus(201))
      .catch((err) => res.status(400).send(err.message));
};
