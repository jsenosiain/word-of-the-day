import { useEffect } from "react";
import { getDictionary, getRandomWord } from "./WordOfTheDay.service";
import styles from "./WordOfTheDay.module.css";
import Phonetic from "./components/Phonetic";

//export interface WordOfTheDayProps {}

const Dict = {
  "word": "banana",
  "phonetic": "/bəˈnɑːnə/",
  "phonetics": [
    {
      "text": "/bəˈnɑːnə/",
      "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/banana-uk.mp3",
      "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=10943367"
    },
    {
      "text": "/bəˈnænə/",
      "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/banana-us.mp3",
      "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=1318008",
      "license": {
        "name": "BY-SA 3.0",
        "url": "https://creativecommons.org/licenses/by-sa/3.0"
      }
    }
  ],
  "meanings": [
    {
      "partOfSpeech": "noun",
      "definitions": [
        {
          "definition": "An elongated curved tropical fruit that grows in bunches and has a creamy flesh and a smooth skin.",
          "synonyms": [],
          "antonyms": []
        },
        {
          "definition": "The tropical tree-like plant which bears clusters of bananas. The plant, usually of the genus Musa but sometimes also including plants from Ensete, has large, elongated leaves and is related to the plantain.",
          "synonyms": [],
          "antonyms": []
        },
        {
          "definition": "A yellow colour, like that of a banana's skin.",
          "synonyms": [],
          "antonyms": []
        },
        {
          "definition": "(mildly) A person of Asian descent, especially a Chinese American, who has assimilated into Western culture or married a Caucasian (from the \"yellow\" outside and \"white\" inside). Compare coconut or Oreo.",
          "synonyms": [],
          "antonyms": []
        },
        {
          "definition": "A banana equivalent dose.",
          "synonyms": [],
          "antonyms": []
        },
        {
          "definition": "A catamorphism (from the use of banana brackets in the notation).",
          "synonyms": [],
          "antonyms": []
        },
        {
          "definition": "The penis.",
          "synonyms": [],
          "antonyms": []
        },
        {
          "definition": "A banana kick.",
          "synonyms": [],
          "antonyms": []
        }
      ],
      "synonyms": [
        "Twinkie",
        "jook-sing"
      ],
      "antonyms": [
        "egg"
      ]
    },
    {
      "partOfSpeech": "adjective",
      "definitions": [
        {
          "definition": "Curved like a banana, especially of a ball in flight.",
          "synonyms": [],
          "antonyms": []
        }
      ],
      "synonyms": [],
      "antonyms": []
    }
  ],
  "license": {
    "name": "CC BY-SA 3.0",
    "url": "https://creativecommons.org/licenses/by-sa/3.0"
  },
  "sourceUrls": [
    "https://en.wiktionary.org/wiki/banana"
  ]
};

export function WordOfTheDay() {
  useEffect(() => {
    //getRandomWord().then((word) => { console.log("word", word) });    
    //getDictionary("banana").then((dict) => { console.log("dict", JSON.stringify(dict, null, 2)) });

    //getRandomWord().then(getDictionary).then((dict) => {
    //  console.log("dict", JSON.stringify(dict, null, 2));
    //})
  }, []);

  console.log("styles", styles);
  

  return (
    <div className={styles.card}>
      <div className={styles.card_title}>{Dict.word}</div>
      <div style={{ display: "flex", flexDirection: "row", gap: 8}}>
        {Dict.phonetics.map((phonetic) => (
          <Phonetic phonetic={phonetic} />
        ))}
      </div>
    </div>
  )
}
