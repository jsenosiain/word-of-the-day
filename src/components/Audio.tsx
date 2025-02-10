import { useEffect, useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const Audio = ({ src }: { src: string }) => {
	const ref = useRef<HTMLAudioElement>(null);

	const [playing, setPlaying] = useState<boolean>(false);

	useEffect(() => {
		const audio = ref.current as HTMLAudioElement;

		const play = () => { setPlaying(true) };
		const pause = () => { setPlaying(false) };
		const ended = () => { setPlaying(false) };
		
		audio.addEventListener("play", play);
		audio.addEventListener("pause", pause);
		audio.addEventListener("ended", ended);

		return () => {
			audio.removeEventListener("play", play);
			audio.removeEventListener("pause", pause);
			audio.removeEventListener("ended", ended);
		}
	}, []);

	const handleClick = () => {
		return playing ? ref.current?.pause() : ref.current?.play();
	};

	return (
		<Box>
			<IconButton disabled={!src} sx={{backgroundColor: "lightblue"}} onClick={handleClick}>
				{playing ? <PauseIcon fontSize="small" /> : <PlayArrowIcon fontSize="small" />}
				<audio ref={ref}>
					<source src={src} />
				</audio>
			</IconButton>	
		</Box>
	);
};

export default Audio;