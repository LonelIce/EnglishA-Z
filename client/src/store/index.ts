import { configureStore } from '@reduxjs/toolkit';
import user from './slyces/user';

const store = configureStore({
  reducer: {
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>; // выводим типы из самого хранилища

export default store;
