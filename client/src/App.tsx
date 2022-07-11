import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import './styles/globale.scss';
import Navbar from './components/Navbar';

const App = function () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
