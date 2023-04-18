import React from "react";

type Props = {
  currentUsername: string,
  sender: string,
  content: string
}

const Message = (props: Props) => {
  const {currentUsername, sender, content} = props;
  return (
    <li className={`message ${sender === currentUsername && "self"}`}>
      {sender !== currentUsername && <div className="avatar">{sender}</div>}
      <div className="message-data">{content}</div>
      {sender === currentUsername && <div className="avatar self">{sender}</div>}
    </li>
  )
}
export default Message;