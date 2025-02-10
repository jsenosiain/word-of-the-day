import { Stack, Typography } from "@mui/material";
import Audio from "./Audio";
import { Dictionary } from "../WordOfTheDay.service";

const Header = ({ dictionary }: { dictionary: Dictionary }) => {
	const { phonetic = "", phonetics = [], sourceUrls = [] } = dictionary;

	const src = phonetics.find(({ text }) => text === phonetic)?.audio ?? "";
  const text = phonetics.find(({ text }) => text === phonetic)?.text ?? phonetic;

	return (
		<Stack spacing={2}>
			<Typography variant="caption">Definitions from: {sourceUrls.join(" | ")}</Typography>
			<Stack direction="row" spacing={2} sx={{alignItems: "center"}}>
				<Audio src={src} />
				<Stack>
					<Typography variant="h4">{dictionary.word}</Typography>
					<Typography variant="body1">{text}</Typography>
				</Stack>
			</Stack>			
		</Stack>
	);
};

export default Header;