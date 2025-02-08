import { Phonetic as PhoneticType } from "../WordOfTheDay.service";

const Phonetic = ({ phonetic }: { phonetic: PhoneticType }) => {
	return (
		<div>{phonetic.text}</div>
	);
};

export default Phonetic;