import { User } from '../../model/User'

export default (req, res) => {
  User.findByIdAndRemove(req.params.id)
  .then(removedUser => res.status(200).json(removedUser) )
  .catch(err => res.status(304).json({ message: err.message}) )
}