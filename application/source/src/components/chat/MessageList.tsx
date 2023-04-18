import Message from "@/components/chat/Message";
import React from "react";
import {ChatMessage} from "@/types/chat";

type Props = {
  chatList: ChatMessage[],
  currentUsername: string,
}

const MessageList = (props: Props) => {
  const {chatList, currentUsername} = props;
  return (
    <ul className="chat-messages">
      {chatList.map((chat, index) => (
        <Message currentUsername={currentUsername} sender={chat.sender} content={chat.content} key={index}/>
      ))}
    </ul>
  )
}
export default MessageList;