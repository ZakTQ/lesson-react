import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='profile'>
                <a className={s.link} href="s#">
                    Profile
                </a>
            </div>
            <div className='messages'>
                <a className={s.link} href="s#">
                    Messages
                </a>
            </div>
            <div className='news'>
                <a className={s.link} href="s#">
                    News
                </a>
            </div>
            <div className='music'>
                <a className={`${s.link} + ${s.active}`} href="s#">
                    Music
                </a>
            </div>
        </nav >
    );
};

export default Nav;