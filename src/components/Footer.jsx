import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    state = {};

    getCurrentYear = () => {
        return new Date().getFullYear();
    };

    render() {
        return (
            <div className='footer'>
                <div>{`©${this.getCurrentYear()} Luis Rodriguez. All rights reserved.`}</div>
            </div>
        );
    }
}

export default Footer;
