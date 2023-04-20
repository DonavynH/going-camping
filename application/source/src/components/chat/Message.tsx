import React from "react";
import {ListItem, ListItemText, Typography} from "@mui/material";

type Props = {
  currentUsername: string,
  sender: string,
  content: string,
  messageType: string
}

const Message = (props: Props) => {
  const {currentUsername, sender, content, messageType} = props;

  const renderMessage = () => {
    const messageSent = currentUsername === sender;
    const messageReceived = messageType === "CHAT";
    const userJoined = messageType === "JOIN";

    const renderSentMessage = () => (
      <ListItem sx={{"textAlign": "right"}}>
        <ListItemText>
          <p> {`${content} `}<span className="chat-sender">{sender}</span></p>
        </ListItemText>
      </ListItem>
    );
    const renderJoinMessage = () => (
      <ListItem sx={{"textAlign": "center"}}>
        <ListItemText>
          <p className="chat-system">{`${sender} has joined the chat!`}</p>
        </ListItemText>
      </ListItem>
    );
    const renderReceivedMessage = () => (
      <ListItem sx={{"textAlign": "left"}}>
        <ListItemText>
          <p><span className="chat-receiver">{`${sender}`}</span>{` ${content}`}</p>
        </ListItemText>
      </ListItem>
    );

    if (messageSent && !userJoined) {
      return renderSentMessage();
    }
    if (messageReceived) {
      return renderReceivedMessage();
    }
    return renderJoinMessage();
  };
  return renderMessage();
};

export default Message;