import { chatRoomValidation } from '../model/ChatRoomModel';

export default (req, res, next) => {
  const chatRoom = req.body;
  const validation = chatRoomValidation.validate(chatRoom);
  if (validation.error) {
    return res.status(400).send(validation.error.details[0].message);
  }
  next();
};
