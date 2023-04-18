// @ts-nocheck
import React, {useEffect, useState} from "react";
import MessageList from "@/components/chat/MessageList";
import MessageInput from "@/components/chat/MessageInput";
import ChatService from "@/services/ChatService";
import Loading from "@/components/loading/Loading";
import {isValidMessage} from "@/validations/TextValidations";

type Props = {
  hostCode: string,
  username: string
}

const Chat = (props: Props) => {
  const {hostCode, username} = props;
  const [chatList, setChatList] = useState([]);
  const [userData, setUserData] = useState({
    username: username,
    connected: false,
    message: ""
  });

  useEffect(() => {
    ChatService.connect(onConnected, onError);
  }, []);

  const onConnected = () => {
    setUserData({...userData, "connected": true});
    ChatService.subscribe(hostCode, onMessageReceived);
    ChatService.addUser(username);
  };

  const onError = (err) => {
    console.log(err);
  };

  const onMessageReceived = (payload) => {
    if (payload.command !== "MESSAGE") return;
    const newMessage = JSON.parse(payload.body);
    chatList.push(newMessage);
    setChatList([...chatList]);
  };

  const handleMessage = (event) => {
    const {value} = event.target;
    setUserData({...userData, "message": value});
  };

  const sendMessage = () => {
    if (!isValidMessage(userData.message)) return;
    ChatService.sendMessage(userData.username, userData.message);
    setUserData({...userData, "message": ""});
  };

  const renderChat = () => (
    <div className="chat-box">
      <div className="chat-content">
        <MessageList chatList={chatList} currentUsername={userData.username}/>
        <MessageInput message={userData.message} handleMessage={handleMessage} sendMessage={sendMessage}/>
      </div>
    </div>
  );

  return (
    <div className="container">
      {userData.connected ? renderChat() : <Loading/>}
    </div>
  );
};

export default Chat;