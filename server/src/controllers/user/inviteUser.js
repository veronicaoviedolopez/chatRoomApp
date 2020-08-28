import { ChatRoom } from '../../model/ChatRoom';
import { User } from '../../model/User';

export default async (req, res) => {
  try {
    const c = await ChatRoom.findById(req.params.chatroom_id, 'name');
    const u = await User.findById(req.params.user_id, 'name');

  /*
    res.write('<html>');
    res.write('<head> <title> chat room invitation  </title> </head>');
    res.write(`<body> Hello, You have a pending request  from  ${u.name}
    <br/> to Chatroom: <em>${c.name}</em> <br/>  Are you agree? <br/> </body>`);
    res.write('</html>');
    */
    // write end to mark it as stop for node js response.
    return res.end();
  } catch (err) {
    res.status(500).json(err);
  }
};
