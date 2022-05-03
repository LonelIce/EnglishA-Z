import axios from 'axios';

interface NewWord {
  word: string;
  translation: string;
  partOfSpeech: string;
}

interface Construction {
  construction: string;
  translation: string;
}

export default class PostService {
  static sendWord = (word: NewWord): void => {
    try {
      axios.post('http://localhost:2000/word', { ...word });
    } catch (e) {
      console.log(e);
    }
  };

  static sendConstruction = (
    construction: Construction,
    wordCount: number
  ): void => {
    try {
      axios.post('http://localhost:2000/construction', {
        ...construction,
        wordCount,
      });
    } catch (e) {
      console.log(e);
    }
  };
}
