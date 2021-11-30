import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Dictionary: FC = function () {
  return (
    <div>
      <NavLink to='/dictionary/addWord'>Добавить слова</NavLink>
      <NavLink to='/dictionary/addConstruction'>Добавить конструкции</NavLink>
      <NavLink to='/dictionary/see'>Смотреть мой словарь</NavLink>
    </div>
  );
};

export default Dictionary;
