import { User } from '../../model/User'

export default (req, res) => {
  try {
      const removedUser = await User.findByIdAndRemove(req.params.userId);
      res.json(removedUser);
  } catch(err) {
      res.json({ message: err});
  }
}