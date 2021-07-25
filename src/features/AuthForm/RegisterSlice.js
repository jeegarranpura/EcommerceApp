import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

const RegisterSlice = createSlice({
  name: "register",
  initialState: {
    fullName: "",
    email: "",
    password: "",
    confirm_password: "",
    mobile_no: "",
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
  extraReducers: {},
});

export const {
  handleOnChangeName,
  handleOnChangeMobileno,
  handleOnChangeEmail,
  handleOnChangePassword,
  handleOnChangeCpassword,
} = RegisterSlice.actions;

export default RegisterSlice.reducer;
