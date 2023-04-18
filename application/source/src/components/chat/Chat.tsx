// @ts-nocheck
import React, {useState} from "react";
import {over} from "stompjs";
import SockJS from "sockjs-client";

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
            <ul className="chat-messages">
              {chatList.length && chatList.map((chat, index) => (
                <li className={`message ${chat.sender === userData.username && "self"}`} key={index}>
                  {chat.sender !== userData.username && <div className="avatar">{chat.sender}</div>}
                  <div className="message-data">{chat.content}</div>
                  {chat.sender === userData.username && <div className="avatar self">{chat.sender}</div>}
                </li>
              ))}
            </ul>

            <div className="send-message">
              <input type="text" className="input-message" placeholder="enter the message" value={userData.message}
                     onChange={handleMessage}/>
              <button type="button" className="send-button" onClick={sendMessage}>send</button>
            </div>
          </div>
        </div>
        :
        <div className="register">
          <input
            id="user-name"
            placeholder="Enter your name"
            name="userName"
            value={userData.username}
            onChange={handleUsername}
            margin="normal"
          />
          <button type="button" onClick={registerUser}>
            connect
          </button>
        </div>}
    </div>
  );
};

export default Chat;