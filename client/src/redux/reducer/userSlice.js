import { createSlice } from "@reduxjs/toolkit";

const userSlice =createSlice({
    name:'user',
    initialState:{
        user:{
            name:'',
            email:'',
        }
    },
    reducers:{
        addUserData : (state,action)=>{
            const newUser =action.payload;
        //Object Method
            state.user.name =newUser.name
            state.user.email =newUser.email
        //     Array Method    
        //     state.user.push({
        //     name:newUser.name,
        //     email:newUser.email,
        //    })
        }
    }

})

export const {addUserData} = userSlice.actions

export default userSlice.reducer