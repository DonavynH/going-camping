import {Box, CircularProgress} from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      id="loading-view"
    >
      <CircularProgress size={"5rem"}/>
      <h2 id="loading-message">Loading...</h2>
    </Box>
  );
};

export default Loading;