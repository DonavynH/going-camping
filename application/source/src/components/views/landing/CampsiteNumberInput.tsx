import React, {ChangeEvent, FormEvent, useState} from "react";
import {NextPage} from "next";
import {Box, Button, TextField} from "@mui/material";

const CampsiteNumberInput: NextPage = () => {
  type CamperData = {
    campsite: string,
    name: string
  }

  const initialCamperData: CamperData = {
    campsite: "",
    name: ""
  };

  const [camperData, setCamperData] = useState<CamperData>(initialCamperData);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCamperData({...camperData, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Camper Post Data " + JSON.stringify(camperData));
  };
  return (
    <Box component={"form"} noValidate autoComplete="off" sx={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }} onSubmit={e => handleSubmit(e)}>

      <TextField name={"campsite"} id="campsite-number" label="Campsite Number" variant="outlined" size="medium"
                 onChange={(e) => handleOnChange(e)} value={camperData.campsite}/>
      <TextField name="name" id="camper-name" label="Campers Name" variant="outlined"
                 onChange={(e) => handleOnChange(e)} value={camperData.name}/>
      <Button type="submit" variant="contained" id="camper-submit">Join</Button>
    </Box>
  );
};

export default CampsiteNumberInput;