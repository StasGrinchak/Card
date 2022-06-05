import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            {/*<h3>Business Сard</h3>*/}
            <img src="/media/S.png" alt=""/>
            <nav className="button-panel">
                <a href="#">Dashboard</a>
                <a href="#">Portfolio</a>
                <a href="#">View code</a>
            </nav>
        </div>
    );
};

export default Header;