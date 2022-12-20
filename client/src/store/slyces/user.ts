import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserData, IUserState } from '../../models/states/userReducer';

const initialState: IUserState = {
  isAuthorization: false,
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registration: (state, action: PayloadAction<IUserData>) => ({
      ...state,
      isAuthorization: true,
      userData: { ...action.payload },
    }),
  },
});

export const { registration } = userSlice.actions;

export default userSlice.reducer;
