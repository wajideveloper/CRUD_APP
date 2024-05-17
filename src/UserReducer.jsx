import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
    name: "users",
    initialState:userList,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)
            console.log(action)
        },

        updateUser:(state,action)=>{
            const {id, uname, uemail} = action.payload;
            const uu = state.find(user => user.id === id);
            if(uu){
                uu.name = uname;
                uu.email = uemail;
            }
            console.log(action)
        },
        deleteUser:(state,action)=>{
            const { id } = action.payload;
            return state.filter(user => user.id !== id);
        },
        // deleteUser:(state,action)=>{
        //     const {id} = action.payload.id;
        //     const uu = state.find(user => user.id == id);
        //     if(uu){
        //         return state.filter(f.id !== id);
        //     }
        //         console.log(action)
        // },
        // deleteUser: (state, action) => {
        //     // const idToDelete = action.payload.id;
        //     // return state.filter(user => user.id !== idToDelete);
        //     console.log(action)
        // },
    }
})

export const {addUser,updateUser,deleteUser} = userSlice.actions;
export default userSlice.reducer