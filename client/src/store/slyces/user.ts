import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserData, IUserState } from '../../models/states/userReducer';

const initialState: IUserState = {
    isAuthorization: true,
    userData: null,
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
    },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
