import {NextPage} from "next";
import {Box} from "@mui/material";
import campfire from "../../../assests/campfire.png"
import Image from "next/image";
const Landing: NextPage = () => {
  return (
    <Box id="landing-view"
         sx={{
           display: "flex",
           flexDirection: "column",
           justifyContent: "center",
           alignItems: "center"
         }}>
      <Image src={campfire} alt="campfire" width={300}/>
      <h1 id="landing-header">I'm going camping and bringing...</h1>
    </Box>
  )
}

export default Landing;