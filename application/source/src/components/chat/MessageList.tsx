import Message from "@/components/chat/Message";
import React from "react";
import {ChatMessage} from "@/types/chat";
import {List} from "@mui/material";

type Props = {
  chatList: ChatMessage[],
  currentUsername: string,
}

const MessageList = (props: Props) => {
  const {chatList, currentUsername} = props;
  return (
    <List className="chat-messages">
      {chatList.map((chat, index) => (
        <Message currentUsername={currentUsername} sender={chat.sender} content={chat.content} messageType={chat.messageType} key={index}/>
      ))}
    </List>
  )
}
export default MessageList;