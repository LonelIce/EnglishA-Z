import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LearnWords from './LearnWords/LearnWords';
import Dictionary from './dictionary/Dictionary';
import AddWord from './dictionary/add/AddWord/AddWord';
import AddConstruction from './dictionary/add/AddConstruction/AddConstruction';

const Main = function () {
  return (
    <main>
      <Routes>
        <Route path='/learnWords' element={<LearnWords />} />
        <Route path='/dictionary' element={<Dictionary />} />
        <Route path='/dictionary/addWord' element={<AddWord />} />
        <Route
          path='/dictionary/addConstruction'
          element={<AddConstruction />}
        />
      </Routes>
    </main>
  );
};

export default Main;
