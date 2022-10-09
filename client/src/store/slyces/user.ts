import { createSlice } from '@reduxjs/toolkit';
import { IUserState, UserRoles } from '../../models/states/userReducer';

const initialState: IUserState = {
  isAuthorization: false,
  userData: {
    username: null,
    role: UserRoles.NONE,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleStatusAuthorization: (state) => {
      state.isAuthorization = !state.isAuthorization;
    },
  },
});

export const { toggleStatusAuthorization } = userSlice.actions;

export default userSlice.reducer;
