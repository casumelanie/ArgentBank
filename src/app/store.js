import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
  devTools: true,
  // Mettre à false lors du passage en prod
})
