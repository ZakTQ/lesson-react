import React from 'react';
import s from './../Header/Header.module.css'

const Header = () => {
    return (
        <header className='header'>
            <img className={s.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png" alt="" />
        </header>
    );
};

export default Header;


