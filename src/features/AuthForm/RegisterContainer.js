import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import Register from "../../components/AuthForm/Register";
import {
  handleOnChangeName,
  handleOnChangeMobileno,
  handleOnChangeEmail,
  handleOnChangePassword,
  handleOnChangeCpassword,
  RegisterUserReq
} from "./RegisterSlice";

const RegisterContainer = ({
  handleOnChangeName,
  handleOnChangeMobileno,
  handleOnChangeEmail,
  handleOnChangePassword,
  handleOnChangeCpassword,
  RegisterUserReq
}) => {
  return (
    <Register
      handleOnChangeName={handleOnChangeName}
      handleOnChangeMobileno={handleOnChangeMobileno}
      handleOnChangeEmail={handleOnChangeEmail}
      handleOnChangePassword={handleOnChangePassword}
      handleOnChangeCpassword={handleOnChangeCpassword}
      RegisterUserReq={RegisterUserReq}
      // fullName={fullName}
    />
  );
};

const SelectFullname = (state) => state.register.fullName;
const SelectEmail = (state) => state.register.email;
const SelectMobile_no = (state) => state.register.mobile_no;
const SelectPassword = (state) => state.register.password;
const SelectConfirm_password = (state) => state.register.confirm_password;
const mapStateProps = (state) => ({
  fullName: SelectFullname(state),
  email: SelectEmail(state),
  mobile_no: SelectMobile_no(state),
  confirm_password: SelectConfirm_password(state),
  password: SelectPassword(state)
});

const mapDispatchToProps = {
  handleOnChangeName,
  handleOnChangeMobileno,
  handleOnChangeEmail,
  handleOnChangePassword,
  handleOnChangeCpassword,
  RegisterUserReq
};

export default connect(mapStateProps, mapDispatchToProps)(RegisterContainer);
