import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import './styles/globale.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dictionary from './pages/Dictionary';
import Train from './pages/Train';
import Login from './pages/Login';

const App = function () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/dictionary' element={<Dictionary />} />
        <Route path='/train' element={<Train />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
