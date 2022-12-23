import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import './styles/globale.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import RegistrationForm from './components/RegistrationForm';
import Profile from './pages/Profile';

const App = function () {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<StartPage />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/login'>
                    <Route index element={<Login />} />
                    <Route path='registration' element={<RegistrationForm />} />
                </Route>
                <Route path='*' element={<>Not Found</>} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
