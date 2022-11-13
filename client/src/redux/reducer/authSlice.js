import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {isLoggedin: false},
  reducers: {
    login: (state)=>{
      state.isLoggedin=true;
    },
    logout: (state)=>{
      state.isLoggedin=false;
    },
  },
})

export const { login , logout} = authSlice.actions

export default authSlice.reducer