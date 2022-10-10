import React from 'react';
import s from './Nav.module.css'
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className='nav'>
            <NavLink className={s.link} to="profile">
                Profile
            </NavLink>

            <NavLink className={s.link} to="messages">
                Messages
            </NavLink>

            <NavLink className={s.link} to="news">
                News
            </NavLink>

            <NavLink className={s.link} to="music">
                Music
            </NavLink>
        </nav >
    );
};

export default Nav;