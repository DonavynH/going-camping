// @ts-nocheck
import React, {useState} from "react";
import {over} from "stompjs";
import SockJS from "sockjs-client";
import MessageList from "@/components/chat/MessageList";
import UsernameInput from "@/components/chat/UsernameInput";
import MessageInput from "@/components/chat/MessageInput";

let stompClient = null;
const Chat = () => {
  const hostCode = "C137";
  const [chatList, setChatList] = useState([]);
  const [userData, setUserData] = useState({
    username: "",
    connected: false,
    message: ""
  });

  const connect = () => {
    let Sock = new SockJS("http://localhost:8080/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    setUserData({...userData, "connected": true});
    stompClient.subscribe(`/chat-room/${hostCode}`, onMessageReceived);
    userJoin();
  };

  const userJoin = () => {
    const chatMessage = {
      sender: userData.username,
      status: "JOIN"
    };
    stompClient.send(`/chat-app/chat/${hostCode}/addUser`, {}, JSON.stringify(chatMessage));
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
    if (stompClient) {
      const chatMessage = {
        sender: userData.username,
        content: userData.message,
        type: "CHAT"
      };
      console.log("Sending Message: " + JSON.stringify(chatMessage));
      stompClient.send(`/chat-app/chat/${hostCode}/sendMessage`, {}, JSON.stringify(chatMessage));
      setUserData({...userData, "message": ""});
    }
  };

  const handleUsername = (event) => {
    const {value} = event.target;
    setUserData({...userData, "username": value});
  };

  const registerUser = () => {
    connect();
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