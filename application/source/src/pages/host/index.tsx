import Chat from "@/components/chat/Chat";
import {Box} from "@mui/material";
import {NextPage} from "next";
import UsernameInput from "@/components/chat/UsernameInput";
import React, {useState} from "react";
import {isValidUsername} from "@/validations/TextValidations";

const Host: NextPage = () => {
  const hostCode = "C137";
  const [username, setUsername] = useState("");
  const [isChat, setIsChat] = useState(false);

  const handleUsername = (event: any) => {
    const {value} = event.target;
    setUsername(value);
  };

  const handleSubmit = () => {
    if (!isValidUsername(username)) return;
    setIsChat(true);
  };
  return (
    <Box id="host-view" sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "1rem"
    }}>
      <h2 id="host-header">Welcome To Your Campsite!</h2>
      {!isChat && <UsernameInput username={username} handleSubmit={handleSubmit} handleUsername={handleUsername}/>}
      {isChat && <Chat hostCode={hostCode} username={username}/>}
    </Box>
  );
};
export default Host;