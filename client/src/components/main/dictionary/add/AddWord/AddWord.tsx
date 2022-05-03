import React, { FC, useState } from 'react';
import DictionaryHelper from '../../../../../utils/DictionaryHelper';
import PostService from '../../../../../API/PostService';

interface NewWord {
  word: string;
  translation: string;
  partOfSpeech: string;
}

const AddWord: FC = function () {
  const [word, setWord] = useState<NewWord>({
    word: '',
    translation: '',
    partOfSpeech: '',
  });
  const optionsPartOfSpeech = DictionaryHelper.getPartOfSpeech();

  const sendWord = (): void => {
    PostService.sendWord({
      word: word.word,
      translation: word.translation,
      partOfSpeech: word.partOfSpeech,
    });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendWord();
        }}
      >
        <input
          type='text'
          value={word.word}
          onChange={(e) => setWord({ ...word, word: e.target.value })}
          required
          placeholder='Введите слово на английском'
        />
        <input
          type='text'
          value={word.translation}
          onChange={(e) => setWord({ ...word, translation: e.target.value })}
          required
          placeholder='Введите перевод слова'
        />
        <select
          value={word.partOfSpeech}
          onChange={(e) => setWord({ ...word, partOfSpeech: e.target.value })}
          required
        >
          <option value='' disabled>
            Выберите часть речи
          </option>
          {optionsPartOfSpeech.map((option) => (
            <option value={option.value}>{option.text}</option>
          ))}
        </select>
        <input type='submit' value='Отправить' />
      </form>
    </div>
  );
};

export default AddWord;
