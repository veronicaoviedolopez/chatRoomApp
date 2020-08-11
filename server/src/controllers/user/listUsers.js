import { User } from '../../model/User'

export default (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.json({ message: err.message}))
}