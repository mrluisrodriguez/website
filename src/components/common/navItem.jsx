import React, { Component } from 'react';
import './navItem.css';

class NavItem extends Component {
    state = {};
    render() {
        const { title } = this.props;
        return <div className='navBox'>{title}</div>;
    }
}

export default NavItem;
