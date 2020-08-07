import { User } from '../../model/User'

export default (req, res) => {
  try {
      const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body) 
      res.json(updatedUser);
  } catch(err) {
      res.json({ message: err});
  }
}