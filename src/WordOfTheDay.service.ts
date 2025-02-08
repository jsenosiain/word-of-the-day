export interface Definition {
	antonyms: string[];
	definition: string;
	synonyms: string[];	
	example?: string;
}

export interface License {
	name: string;
	url: string;
}

export interface Meaning {
	antonyms: string[];
	definitions: Definition[];
	partOfSpeech: string;
	synonyms: string[];
}

export interface Phonetic {
	audio?: string;
	sourceUrl?: string;
	text: string;
}

export interface Dictionary {
	license: License,
	meaning: Meaning[],
	phonetic?: string;
	phonetics: Phonetic[];
	sourceUrl: string[];
	word: string;
}

export const getRandomWord = async (): Promise<string> => {
	const [word] = await (await fetch("https://random-word-api.herokuapp.com/word")).json();

	return word;
};

export const getDictionary = async (word: string): Promise<Dictionary> => {
	const [dictionary] = await (await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)).json();	
	
	return dictionary;
};
