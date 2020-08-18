import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { constants } from "../../config/constants";

const Reloj = () => {
  const [response, setResponse] = useState("");

  this.state = {
    messages: [1, 2]
  }

  const sendMessage = () => {
    const socket = socketIOClient(constants.IP_Server);
    socket.emmit('new_message', { message: 'adasdasdasdasdasd' });

    socket.on('incomming_message', () => {
      this.state({
        message: [1, 2, 3]
      })
    });
  }

  useEffect(() => {
    const socket = socketIOClient(constants.IP_Server);
    socket.on("FromAPI", (data) => {
      setResponse(data);
    });
  }, []);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
};

export default Reloj;