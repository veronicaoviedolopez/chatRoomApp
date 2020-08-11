import { User } from '../../model/User';
import bcrypt  from 'bcryptjs';
import jwt from'jsonwebtoken';
import { constants } from "../../config/constants";

export default (req, res) => {
  // Checking if the name exists
  console.log(req.body.name);
  var user = User.findOne({name: req.body.name }).exec();
  user.then(user => {
  // Checking if the password is correct
  const validPass = bcrypt.compare(req.body.password, user.password);

  if(!validPass)
  return res.status(401).json({ message: "Username or password is wrong"})
  
  req.body.password = null;

  // Create and assign a token
  const token = jwt.sign(req.body, constants.JWTSecret);

  return res.status(200).json(token);
  });
  
  user.catch(() => res.status(401).json({ message: "findOne Username or password is wrong"}));
}