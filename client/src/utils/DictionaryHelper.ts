interface PartOfSpeech {
  value: string;
  text: string;
}

export default class DictionaryHelper {
  static getPartOfSpeech = (): PartOfSpeech[] => [
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

  static calWords = (construction: string): number => {
    let count: number = 1;
    for (let i = 0; i < construction.length; i += 1) {
      if (construction[i] === ' ') count += 1;
    }
    return count;
  };
}
