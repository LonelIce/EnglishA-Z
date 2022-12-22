import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import './styles/globale.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';

const App = function () {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<StartPage />} />
                <Route path='/login/*' element={<Login />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
