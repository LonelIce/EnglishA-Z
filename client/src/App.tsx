import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import './styles/globale.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import RegistrationForm from './components/RegistrationForm';
import Profile from './pages/Profile';
import AuthorizationService from './services/AuthorizationService';
import useAppDispatch from './hooks/useAppDispatch';
import { setUserData } from './store/slyces/user';

const App: FC = function () {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response =
                    await AuthorizationService.checkAuthorization();
                console.log(response.data);
                localStorage.setItem('token', response.data.tokens.accessToken);
                dispatch(setUserData(response.data.user));
            } catch (e) {
                console.log(e.response?.data?.message);
            }
        };
        checkAuth();
    }, []);

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
