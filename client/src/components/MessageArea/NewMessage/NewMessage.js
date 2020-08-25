import React from "react";

const NewMessage = (props) => {
  const handleUserKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      props.onKeyPress(e.target.value);
    }
  };

  return (
    <textarea
      className="newMessage-container"
      type="text"
      rows="4"
      placeholder="Escribe un mensaje"
      onKeyPress={handleUserKeyPress}
    />
  );
};

export default NewMessage;
