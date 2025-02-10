import { Stack, Typography } from "@mui/material";
import { Meaning as MeaningType } from "../WordOfTheDay.service";

interface MeaningProps {
  meaning: MeaningType;
}

const Meaning = ({ meaning }: MeaningProps) => {
  const { partOfSpeech = "", definitions = [] } = meaning;

  return (
    <Stack spacing={0}>
      <Typography variant="subtitle2"><em>{partOfSpeech}</em></Typography>
      <ol style={{margin: 0}}>
        {definitions.map(({ definition }) => (
          <li style={{margin: "8px 0"}}>
            <Typography variant="body2">{definition}</Typography>
          </li>
        ))}
      </ol>
    </Stack>
  );
};

export default Meaning;