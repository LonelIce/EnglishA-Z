import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = function () {
  return (
    <nav>
      <NavLink to='/learnWords'>Учить слова</NavLink>
      <NavLink to='/dictionary'>Словарь</NavLink>
    </nav>
  );
};

export default Navigation;
