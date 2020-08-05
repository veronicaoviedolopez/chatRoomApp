const jwt = require('jsonwebtoken');

module.exports = function auth (req, res, next) {
  const token = req.header('auth-token');
  if(!token)
    return res.status(401).send('Access Denied');

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if(err) {
        return res.send(400).send('Invalid Token');
      }

      next();
    });
}