import { Box } from "@mui/material";
import {NextPage} from "next";

const Host: NextPage = () => {
  return (
    <Box id="host-view" sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "1rem"
    }}>
      <h2 id="host-header">Welcome To Your Campsite!</h2>
    </Box>
  )
}
export default Host;