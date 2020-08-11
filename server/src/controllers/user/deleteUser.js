import { User } from '../../model/User'

export default (req, res) => {
  User.findByIdAndRemove(req.params.id)
  .then(() => res.sendStatus(200))
  .catch(err => res.status(304).json(err))
}