import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Login from '../../components/AuthForm/Login';
import { LoginReq } from './RegisterSlice';


const LoginContainer = ({
    LoginReq,
    props
}) =>{
    return(
        <Login 
        LoginReq={LoginReq}
        {...props}
        />
    )
};
const SelectData = (state) => state.register.data;
const mapStateProps = (state)  => ({
data : SelectData(state),
});

const mapDispatchToProps ={
    LoginReq,
};

export default connect(mapStateProps, mapDispatchToProps) (LoginContainer);