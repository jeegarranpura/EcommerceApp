import { render } from '@testing-library/react';
import HeaderContainer from '../features/LayoutContianers/HeaderContainer';
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
                <HeaderContainer />
                {children}
            </div>
            </>
        )
    }
}
    

export default React.memo(MainLayout);
