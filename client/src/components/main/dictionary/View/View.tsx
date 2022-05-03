import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Words } from '../../../../types/Types';

const View: FC = function () {
  const [words, setWords] = useState<Words[]>([]);
  async function fetchWords() {
    try {
      const response = await axios.get<Words[]>('http://localhost:2000/word');
      setWords(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <div>
      {words.map((word) => (
        <div>
          {word.word}-{word.translation}
        </div>
      ))}
    </div>
  );
};

export default View;
