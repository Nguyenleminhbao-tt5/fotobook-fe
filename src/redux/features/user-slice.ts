import IUser from "@/interfaces/user-interface";
import { createSlice } from "@reduxjs/toolkit";



const initialState: IUser = {
    user_id: '',
    email: '',
    avatar: '',
    firstName: '',
    lastName: ''
}


const userSlice= createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
});

const userReducer = userSlice.reducer;

export default userReducer;
