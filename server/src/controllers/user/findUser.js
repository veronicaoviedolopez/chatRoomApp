import { User } from '../../model/User'

export default (req, res) => {
  User.findById(req.params.id)
  .then(user => res.status(200).json(user))
  .catch(err => res.status(500).json({ message: err.message}))
}