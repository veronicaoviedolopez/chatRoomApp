export default (req, res) => {
  // Checking if the name exists
  const error;
  const user = await User.findOne({ name: req.body.name });
  !user ? error = true : null;
  
  // Checking if the password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  !validPass ? error = true : null;

  if(error) {
    return res.status(400).send("Username or password is wrong")
  }

  req.body.password = null;

  // Create and assign a token
  const token = jwt.sign(req.body, constants.JWTSecret);

  res.status(200).json(token);
}