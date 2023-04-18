// @ts-nocheck
import React, {useState} from "react";
import MessageList from "@/components/chat/MessageList";
import UsernameInput from "@/components/chat/UsernameInput";
import MessageInput from "@/components/chat/MessageInput";
import ChatService from "@/services/ChatService";

const Chat = () => {
  const hostCode = "C137";
  const [chatList, setChatList] = useState([]);
  const [userData, setUserData] = useState({
    username: "",
    connected: false,
    message: ""
  });

  const registerUser = () => {
    // Validate Username Here
    ChatService.connect(onConnected, onError);
  };

  const onConnected = () => {
    setUserData({...userData, "connected": true});
    ChatService.subscribe(hostCode, onMessageReceived);
    ChatService.addUser(userData.username);
  };

  const onMessageReceived = (payload) => {
    if (payload.command !== "MESSAGE") return;
    const newMessage = JSON.parse(payload.body);
    chatList.push(newMessage);
    setChatList([...chatList]);
  };

  const onError = (err) => {
    console.log(err);
  };

  const handleMessage = (event) => {
    const {value} = event.target;
    setUserData({...userData, "message": value});
  };

  const sendMessage = () => {
    ChatService.sendMessage(userData.username, userData.message);
    setUserData({...userData, "message": ""});
  };

  const handleUsername = (event) => {
    const {value} = event.target;
    setUserData({...userData, "username": value});
  };

  return (
    <div className="container">
      {userData.connected ?
        <div className="chat-box">
          <div className="chat-content">
            <MessageList chatList={chatList} currentUsername={userData.username}/>
            <MessageInput message={userData.message} handleMessage={handleMessage} sendMessage={sendMessage}/>
          </div>
        </div>
        :
        <UsernameInput username={userData.username} registerUser={registerUser} handleUsername={handleUsername}/>}
    </div>
  );
};

export default Chat;