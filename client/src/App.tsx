import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import './styles/globale.scss';

const App = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
