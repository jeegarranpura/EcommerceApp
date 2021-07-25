import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../../components/Dashboard/Dashboard';


const DashboardContainer = ({
    
}) =>{
    return(
        <Dashboard />
    )
};

const mapStateProps = (state)  => ({

});

const mapDispatchToProps ={

};

export default connect(mapStateProps, mapDispatchToProps) (DashboardContainer);