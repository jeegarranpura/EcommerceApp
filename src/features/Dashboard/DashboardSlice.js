import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import {
    GetAllUserData
} from '../../utils/dashboard-utils';

export const getAllUserDataReq = createAsyncThunk('getAllUserDataReq',async () =>{
    const response = await GetAllUserData();
    return response;
})
const DashboardSlice = createSlice({
    name: 'dashboard',
    initialState :{
        allUserData : [],
        userDetails :[]
    },
    reducers:{

    },
    extraReducers:{
        [getAllUserDataReq.fulfilled]:(state, action) => {
            if(action.payload !== null ){
                console.log("action", action.payload);
                state.allUserData = action.payload !== undefined ? action.payload.result : [];
                state.userDetails = action.payload !== undefined ? action.payload.user : [];
            }
        }
    }
});


export default DashboardSlice.reducer;