import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Words {
  id: number;
  word: string;
  translation: string;
}

const LearnWords = function () {
  const [words, setWords] = useState<Words[]>([]);

  async function fetchWords() {
    try {
      const response = await axios.get<Words[]>('http://localhost:2000/words');
      setWords(response.data);
    } catch (e) {
      console.log('error data');
    }
  }

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <div>
      {words.map((word) => (
        <div>
          {word.id}
          {word.word}
          {word.translation}
        </div>
      ))}
    </div>
  );
};

export default LearnWords;
