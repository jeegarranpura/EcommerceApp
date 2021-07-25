import { render } from '@testing-library/react';
import React from  'react';

class MainLayout extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { children } = this.props;
        return (
            <>
            <div className= "container">
                {children}
            </div>
            </>
        )
    }
}
    

export default React.memo(MainLayout);
