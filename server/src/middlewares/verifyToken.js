import  jwt  from 'jsonwebtoken';
import { constants } from "../config/constants";

export default (req, res, next) => {
  const token = req.header('auth-token');
  if(!token)
    return res.status(401).send('Access Denied');

  jwt.verify(token, constants.JWTSecret, (err, decoded) => {
    if(err) {
      return res.send(400).send('Invalid Token');
    }

    next();
  });
}