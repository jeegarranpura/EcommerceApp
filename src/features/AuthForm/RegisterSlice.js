import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { registerUserReq, loginUserReq } from '../../utils/auth-utils';

export const RegisterUserReq = createAsyncThunk('RegisterUserReq', async (arg) => {
  const response = await registerUserReq(arg.name, arg.email, arg.password, arg.mobile_no);
  return response;
});

export const LoginReq = createAsyncThunk('LoginReq', async (arg) => {
  const response = await loginUserReq(arg.email, arg.password);
  return response;
} )

const RegisterSlice = createSlice({
  name: "register",
  initialState: {
    fullName: "",
    email: "",
    password: "",
    confirm_password: "",
    mobile_no: "",
    data : [],
  },
  reducers: {
    handleOnChangeName: {
      reducer(state, action) {
        console.log("event", action.payload);
        state.fullName = action.payload;
      },
      prepare(e) {
        return {
          payload: e.target.value,
        };
      },
    },
    handleOnChangeEmail: {  
      reducer(state, action) {
        console.log("event", action.payload);
        state.email = action.payload;
      },
      prepare(e) {
        return {
          payload: e.target.value,
        };
      },
    },
    handleOnChangePassword: {
      reducer(state, action) {
        console.log("event", action.payload);
        state.password = action.payload;
      },
      prepare(e) {
        return {
          payload: e.target.value,
        };
      },
    },
    handleOnChangeCpassword: {
      reducer(state, action) {
        console.log("event", action.payload);
        state.confirm_password = action.payload;
      },
      prepare(e) {
        return {
          payload: e.target.value,
        };
      },
    },
    handleOnChangeMobileno: {
      reducer(state, action) {
        console.log("event", action.payload);
        state.mobile_no = action.payload;
      },
      prepare(e) {
        return {
          payload: e.target.value,
        };
      },
    },
  },
  extraReducers: {
    [RegisterUserReq.fulfilled] : (state, action) =>{
      if(action.payload !== null){
        console.log("from slice");
      }
    },
    [LoginReq.fulfilled] : (state, action) =>{
      if(action.payload !== null) {
        state.data = action.payload;
        console.log(action.payload);
      }
    }
  },
});

export const {
  handleOnChangeName,
  handleOnChangeMobileno,
  handleOnChangeEmail,
  handleOnChangePassword,
  handleOnChangeCpassword,
} = RegisterSlice.actions;

export default RegisterSlice.reducer;
