import { User } from '../../model/User'

export default (req, res) => {
  try {
      const user = await User.findById(req.params.userId);
      res.status(200).json(user);
  } catch(err) {
      res.status(500).json({ message: err});
  }
}