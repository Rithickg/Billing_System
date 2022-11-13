import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducer/authSlice'
import userReducer from '../reducer/userSlice'

export default configureStore({
  reducer: {
    auth :authReducer,
    user :userReducer,
  },
})