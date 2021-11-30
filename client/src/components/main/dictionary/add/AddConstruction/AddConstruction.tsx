import React, { FC, useState } from 'react';
import axios from 'axios';

interface Construction {
  construction: string;
  translation: string;
}

const AddConstruction: FC = function () {
  const [construction, setConstruction] = useState<Construction>({
    construction: '',
    translation: '',
  });

  const countWord = (): number => {
    let count: number = 1;
    for (let i = 0; i < construction.construction.length; i += 1) {
      if (construction.construction[i] === ' ') count += 1;
    }
    return count;
  };
  const sendConstruction = (): void => {
    axios.post(
      'http://localhost:2000/addConstruction',
      `construction=${construction.construction}&translation=${
        construction.translation
      }&wordCount=${countWord()}`
    );
  };

  return (
    <div>
      <form onSubmit={sendConstruction}>
        <input
          type='text'
          value={construction.construction}
          onChange={(e) =>
            setConstruction({ ...construction, construction: e.target.value })
          }
          placeholder='Введите конструкцию на английском'
          required
        />
        <input
          type='text'
          value={construction.translation}
          onChange={(e) => {
            setConstruction({ ...construction, translation: e.target.value });
          }}
          placeholder='Введите перевод'
          required
        />
        <input type='submit' value='Отправить' />
      </form>
    </div>
  );
};

export default AddConstruction;
