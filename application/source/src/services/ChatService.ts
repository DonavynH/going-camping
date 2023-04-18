import SockJS from "sockjs-client";
import {Client, over} from "stompjs";

const BASE_URL = "http://localhost:8080/ws"

let stompClient: Client | null = null;
let campCode: string | null = null;

export default {
  connect(onConnected: () => void, onError: () => void) {
    if(stompClient) return;
    const Sock = new SockJS(BASE_URL);
    stompClient = over(Sock);
    stompClient?.connect({}, onConnected, onError);
  },
  subscribe(chatRoomCode: string, onMessageReceived: () => void ) {
    campCode = chatRoomCode;
    stompClient?.subscribe(`/chat-room/${campCode}`, onMessageReceived);
  },
  addUser(username: string) {
    const chatMessage = {
      sender: username,
      status: "JOIN"
    };
    stompClient?.send(`/chat-app/chat/${campCode}/addUser`, {}, JSON.stringify(chatMessage));
  },
  sendMessage(userName: string, message: string) {
    const chatMessage = {
      sender: userName,
      content: message,
      type: "CHAT"
    };
    stompClient?.send(`/chat-app/chat/${campCode}/sendMessage`, {}, JSON.stringify(chatMessage));

  }
}