import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserData, IUserState } from '../../models/states/userReducer';

const initialState: IUserState = {
    isAuthorization: false,
    userData: {
        email: '',
        id: '',
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<IUserData>) => ({
            ...state,
            isAuthorization: true,
            userData: { ...action.payload },
        }),
        logout: () => initialState,
    },
});

export const { setUserData, logout } = userSlice.actions;

export default userSlice.reducer;
