import React from "react";

const NewMessage = (props) => {
  const handleUserKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      props.onKeyPress(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <textarea
      className="newMessage-container"
      type="text"
      maxLength="200"
      placeholder="Escribe un mensaje"
      onKeyPress={handleUserKeyPress}
      readOnly={props.setReadonly}
    />
  );
};

export default NewMessage;
