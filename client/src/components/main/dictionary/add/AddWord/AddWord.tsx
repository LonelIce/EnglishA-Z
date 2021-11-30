import React, { FC, useState } from 'react';
import axios from 'axios';

interface NewWord {
  word: string;
  translation: string;
}

const AddWord: FC = function () {
  const [word, setWord] = useState<NewWord>({ word: '', translation: '' });
  const [valueSelect, setValueSelect] = useState<string>('');
  const optionsPartOfSpeech = [
    { value: 'noun', text: 'Cуществительное' },
    { value: 'verb', text: 'Глагол' },
    { value: 'adjective', text: 'Прилагательное' },
    { value: 'numeral', text: 'Числительное' },
    { value: 'pronoun', text: 'Местоимение' },
    { value: 'adverb', text: 'Наречие' },
    { value: 'article', text: 'Артикль' },
    { value: 'preposition', text: 'Предлог' },
    { value: 'conjunction', text: 'Союз' },
    { value: 'interjection', text: 'Междометие' },
  ];

  const sendWord = (): void => {
    axios.post(
      'http://localhost:2000/addWords',
      `word=${word.word}&translation=${word.translation}&partOfSpeech=${valueSelect}`
    );
  };

  return (
    <div>
      <form onSubmit={sendWord}>
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
          value={valueSelect}
          onChange={(e) => setValueSelect(e.target.value)}
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
