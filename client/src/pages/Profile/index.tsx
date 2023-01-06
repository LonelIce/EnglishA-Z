import React, { FC } from 'react';
import useTypesSelector from '../../hooks/useTypesSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import { logout } from '../../store/slyces/user';
import AuthorizationService from '../../services/AuthorizationService';

const Profile: FC = function () {
    const userData = useTypesSelector((state) => state.user.userData);
    const dispatch = useAppDispatch();

    const sendLogout = async () => {
        try {
            await AuthorizationService.logout();
            localStorage.removeItem('token');
            dispatch(logout());
        } catch (e: any) {
            console.log(e.response?.data?.message);
            alert(e.response?.data?.message);
        }
    };
    return (
        <main>
            Email-{userData.email}
            Id-{userData.id}
            <button
                type='button'
                onClick={() => {
                    sendLogout();
                }}
            >
                Выйти
            </button>
        </main>
    );
};

export default Profile;
