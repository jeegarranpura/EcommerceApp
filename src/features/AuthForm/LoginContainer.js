import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Login from '../../components/AuthForm/Login';


const LoginContainer = ({
    
}) =>{
    return(
        <Login />
    )
};

const mapStateProps = (state)  => ({

});

const mapDispatchToProps ={

};

export default connect(mapStateProps, mapDispatchToProps) (LoginContainer);