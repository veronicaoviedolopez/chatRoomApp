import { User } from "../../model/User";
import bcrypt from "bcryptjs";
import { constants } from "../../config/constants";

export default (req, res) => {
  // Hash passwords
  bcrypt.genSalt(constants.numeroSalt)
    .then(salt => bcrypt.hash(req.body.password, salt))
    .then(hashedPassword => {
      req.body.password = hashedPassword;
      
      // Create a new user
      return new User(req.body).save()
    })
    .then(() => res.sendStatus(201))
    .catch(err => res.status(400).json(err));
};
