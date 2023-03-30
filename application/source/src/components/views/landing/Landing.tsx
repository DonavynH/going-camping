import {NextPage} from "next";
import {Box, Button} from "@mui/material";
import campfire from "../../../assests/campfire.png";
import Image from "next/image";
import CamperJoinForm from "@/components/views/landing/CamperJoinForm";
import {useRouter} from "next/router";

const Landing: NextPage = () => {
  const router = useRouter();

  const navToHostView = () => {
    router.push("host");
  }

  return (
    <Box id="landing-view">
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem"
      }}>
        <Image src={campfire} alt="campfire" width={300}/>
        <h1 id="landing-header">I'm going camping and bringing...</h1>
        <CamperJoinForm/>
      </Box>
      <Box sx={{
        position: "absolute",
        top: "20px",
        right: "20px",
      }}>
        <Button variant="contained" id="host-button" onClick={navToHostView}>Host</Button>
      </Box>
    </Box>
  );
};

export default Landing;