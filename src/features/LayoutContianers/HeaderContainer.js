import React from "react";
import { connect } from "react-redux";
import Header from "../../layout/Header";

const HeaderContainer = () => {
  let userDetails = { userEmail: window.localStorage.getItem("UserEmail") };
  return <Header userDetails={userDetails} />;
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
