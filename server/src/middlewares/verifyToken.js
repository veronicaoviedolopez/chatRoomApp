import jwt from 'jsonwebtoken';


export default (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send('Access Denied');
  }

  jwt.verify(token, process.env.JWTSecret, (err, decoded) => {
    if (err) {
      return res.status(400).send('Invalid Token');
    }

    next();
  });
};
