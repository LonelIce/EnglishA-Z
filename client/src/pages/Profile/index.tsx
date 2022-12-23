import React, { FC } from 'react';
import useTypesSelector from '../../hooks/useTypesSelector';

const Profile: FC = function () {
    const userData = useTypesSelector((state) => state.user.userData);
    return (
        <main>
            Профиль UserData- {userData};
            <button
                type='button'
                onClick={() => {
                    alert('Выход');
                }}
            >
                Выйти
            </button>
        </main>
    );
};

export default Profile;
