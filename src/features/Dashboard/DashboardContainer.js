import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Dashboard from "../../components/Dashboard/Dashboard";
import { getAllUserDataReq } from "./DashboardSlice";

const DashboardContainer = ({ getAllUserDataReq, allUserData,userDetails,props}) => {
  useEffect(() => {
    getAllUserDataReq();
  }, [getAllUserDataReq]);
  return <Dashboard allUserData={allUserData} userDetails={userDetails} {...props}/>;
};
const selectAllUserData = (state) => state.dashboard.allUserData;
const selectUserDetails = (state) => state.dashboard.userDetails;
const mapStateProps = (state) => ({
  allUserData: selectAllUserData(state),
  userDetails: selectUserDetails(state),
});

const mapDispatchToProps = {
  getAllUserDataReq,
  
};

export default connect(mapStateProps, mapDispatchToProps)(DashboardContainer);
