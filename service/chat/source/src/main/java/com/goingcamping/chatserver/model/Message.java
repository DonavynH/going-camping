package com.goingcamping.chatserver.model;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Message {
    private String sender;
    private String content;
    private String date;
    private MessageType messageType;
}
