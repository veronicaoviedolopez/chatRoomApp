import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { constants } from "../../config/constants";

const Reloj = () => {
  const [response, setResponse] = useState("");

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