import PropTypes from 'prop-types';
import React from 'react';

const PageSpinner=({ color = "primary",spinner = "grow"}) =>{
    return(
        <div className="cr-page-spinner">
            <div className={`spinner-${spinner} text-${color}`} role="status"> 
                <span className="sr-only"></span>
            </div>
        </div>
    );
};
PageSpinner.propTypes ={
    color : PropTypes.oneOf(["primary", "secondary", "success"])
};

export default PageSpinner;