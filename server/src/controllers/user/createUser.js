import { User } from "../../model/User";
import bcrypt from "bcryptjs";
import { constants } from "../../config/constants";

export default (req, res) => {
  // Hash passwords

  bcrypt.genSalt(constants.numeroSalt)
    .then(salt => {
        bcrypt.hash(req.body.password, salt)
        .then( hashedPassword => {
            req.body.password = hashedPassword;
            
            const newUser = new User(req.body);

            // Create a new user
            newUser
              .save()
              .then((user) => {
                res.status(201).json({ user: user._id })
              })
              .catch(err => res.status(400).json({ message: err.message}))
        })
        .catch(err => res.status(400).json({ message: err.message }));
    })
    .catch(err => res.status(400).json({ message: err.message }));
};
