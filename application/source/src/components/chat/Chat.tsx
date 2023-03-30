// @ts-nocheck
import React, { useEffect, useState } from 'react'
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
let stompClient =null;
const Chat = () => {
  const hostCode = "C137"
  const [privateChats, setPrivateChats] = useState([]);
  const [userData, setUserData] = useState({
    username: '',
    receivername: '',
    connected: false,
    message: ''
  });
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const connect =()=>{
    let Sock = new SockJS('http://localhost:8080/ws');
    stompClient = over(Sock);
    stompClient.connect({},onConnected, onError);
  }

  const onConnected = () => {
    setUserData({...userData,"connected": true});
    stompClient.subscribe('/host/'+hostCode+'/private', onPrivateMessage);
    userJoin();
  }

  const userJoin=()=>{
    const chatMessage = {
      senderName: userData.username,
      status:"JOIN"
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  }

  const onPrivateMessage = (payload)=>{
    console.log(payload);
    let payloadData = JSON.parse(payload.body);
    if(payloadData.receiverName === hostCode){
      privateChats.push(payloadData);
      setPrivateChats(...privateChats);
    }
  }

  const onError = (err) => {
    console.log(err);
  }

  const handleMessage =(event)=>{
    const {value}=event.target;
    setUserData({...userData,"message": value});
  }

  const sendPrivateValue=()=>{
    if (stompClient) {
      const chatMessage = {
        senderName: userData.username,
        receiverName:hostCode,
        message: userData.message,
        status:"MESSAGE"
      };
      console.log("Sending Private Message: " + JSON.stringify(chatMessage));
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setUserData({...userData,"message": ""});
    }
  }

  const handleUsername=(event)=>{
    const {value}=event.target;
    setUserData({...userData,"username": value});
  }

  const registerUser=()=>{
    connect();
  }
  return (
    <div className="container">
      {userData.connected?
        <div className="chat-box">
          <div className="chat-content">
            <ul className="chat-messages">
              {privateChats.map((chat,index)=>(
                <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                  {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                  <div className="message-data">{chat.message}</div>
                  {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                </li>
              ))}
            </ul>

            <div className="send-message">
              <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} />
              <button type="button" className="send-button" onClick={sendPrivateValue}>send</button>
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
  )
}

export default Chat