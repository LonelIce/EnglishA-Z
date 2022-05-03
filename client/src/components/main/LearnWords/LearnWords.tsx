import React, { FC } from 'react';
import Card from './Card/Card';

const LearnWords: FC = function () {
  return (
    <div>
      Выберите категорию
      <Card onClick={() => console.log(1)}>Учить слова</Card>
      <Card onClick={() => console.log(1)}>Учить конструкции</Card>
    </div>
  );
};

export default LearnWords;
