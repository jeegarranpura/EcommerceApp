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
} from "./RegisterSlice";

const RegisterContainer = ({
  handleOnChangeName,
  handleOnChangeMobileno,
  handleOnChangeEmail,
  handleOnChangePassword,
  handleOnChangeCpassword,
}) => {
  return (
    <Register
      handleOnChangeName={handleOnChangeName}
      handleOnChangeMobileno={handleOnChangeMobileno}
      handleOnChangeEmail={handleOnChangeEmail}
      handleOnChangePassword={handleOnChangePassword}
      handleOnChangeCpassword={handleOnChangeCpassword}
      // fullName={fullName}
    />
  );
};

const SelectFullname = (state) => state.register.fullName;
const SelectEmail = (state) => state.register.email;
const SelectMobile_no = (state) => state.register.mobile_no;
const mapStateProps = (state) => ({
  fullName: SelectFullname(state),
  email: SelectEmail(state),
  mobile_no: SelectMobile_no(state),
});

const mapDispatchToProps = {
  handleOnChangeName,
  handleOnChangeMobileno,
  handleOnChangeEmail,
  handleOnChangePassword,
  handleOnChangeCpassword,
};

export default connect(mapStateProps, mapDispatchToProps)(RegisterContainer);
