import React from 'react';
import Hamburger from '../components/navigation/Hamburger';
import Menu from '../components/navigation/Menu';

const NavigationView = props => {
    return (
        <div>
            <Hamburger />
            <Menu />
        </div>
    );
}

export default NavigationView;