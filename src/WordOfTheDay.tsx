import { Box, Stack, Typography } from "@mui/material";
import { Dictionary, getDictionary, getRandomWord } from "./WordOfTheDay.service";
import Header from "./components/Header";
import Meaning from "./components/Meaning";

//import banana from "./data/banana.json";
//import potato from "./data/potato.json";
//import { Dictionary } from "./WordOfTheDay.service";
import { useEffect, useState } from "react";

//const dict: Dictionary = banana;

export function WordOfTheDay() {
  const [dict, setDict] = useState<Dictionary>({
    license: { name: "", url: "" },
    meanings: [],
    phonetic: "",
    phonetics: [],
    sourceUrls: [],
    word: ""
  });

  useEffect(() => {
    getRandomWord().then(getDictionary).then(setDict);
  }, []);

  return (
    <Stack spacing={2}>
      <Header dictionary={dict} />  
      {dict.meanings.map((meaning) => (<Meaning meaning={meaning} />))}   
      <Box sx={{display: "flex", justifyContent: "center", mt: 4}}>
        <Typography variant="caption">
          <a href={dict.license.url}>{dict.license.name}</a>             
        </Typography>
      </Box>
    </Stack>
  )
}
