import React from "react";

type Props = {
  message: string,
  handleMessage: () => void,
  sendMessage: () => void
}
const MessageInput = (props: Props) => {
  const {message, handleMessage, sendMessage} = props;
  return (
    <div className="send-message">
      <input type="text" className="input-message" placeholder="enter the message" value={message}
             onChange={handleMessage}/>
      <button type="button" className="send-button" onClick={sendMessage}>send</button>
    </div>
  )
}
export default MessageInput;