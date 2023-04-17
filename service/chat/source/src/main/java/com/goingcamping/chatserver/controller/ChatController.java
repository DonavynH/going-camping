package com.goingcamping.chatserver.controller;

import com.goingcamping.chatserver.model.Message;
import com.goingcamping.chatserver.model.MessageType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
    private static final Logger logger = LoggerFactory.getLogger(ChatController.class);
    @Autowired
    private SimpMessageSendingOperations messagingTemplate;

    @MessageMapping("/chat/{roomId}/sendMessage")
    public void sendMessage(@DestinationVariable String roomId, @Payload Message message) {
        logger.info(roomId + " Chat message received is " + message.getContent());
        messagingTemplate.convertAndSend(String.format("/chat-room/%s", roomId), message);

    }

    @MessageMapping("/chat/{roomId}/addUser")
    public void addUser(@DestinationVariable String roomId, @Payload Message message, SimpMessageHeaderAccessor headerAccessor) {
        // Refactor to method
        String currentRoomId = (String) headerAccessor.getSessionAttributes().put("room_id", roomId);
        if (currentRoomId != null) {
            Message leaveMessage = new Message();
            leaveMessage.setMessageType(MessageType.LEAVE);
            leaveMessage.setSender(message.getSender());
            messagingTemplate.convertAndSend(String.format("/chat-room/%s", currentRoomId), message);
        }
        headerAccessor.getSessionAttributes().put("name", message.getSender());
        messagingTemplate.convertAndSend(String.format("/chat-room/%s", roomId), message);
    }
}
