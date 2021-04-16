import React, { Component } from 'react';
import NavItem from './common/navItem';
import './Header.css';

class Header extends Component {
    state = {};
    render() {
        return (
            <div className='header'>
                <div className='navContainer'>
                    <NavItem title='Home' />
                    <NavItem title='Bio' />
                    <NavItem title='Code' />
                    <NavItem title='Music' />
                    <NavItem title='Contact' />
                </div>
            </div>
        );
    }
}

export default Header;
