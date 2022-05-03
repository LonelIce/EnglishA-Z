import React, { FC, useState } from 'react';
import PostService from '../../../../../API/PostService';
import DictionaryHelper from '../../../../../utils/DictionaryHelper';

interface Construction {
  construction: string;
  translation: string;
}

const AddConstruction: FC = function () {
  const [construction, setConstruction] = useState<Construction>({
    construction: '',
    translation: '',
  });

  const sendConstruction = (): void => {
    PostService.sendConstruction(
      construction,
      DictionaryHelper.calWords(construction.construction)
    );
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendConstruction();
        }}
      >
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
