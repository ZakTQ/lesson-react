import React from 'react';

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='profile'>
                <a href="s#">
                    Profile
                </a>
            </div>
            <div className='messages'>
                <a href="s#">
                    Messages
                </a>
            </div>
            <div className='news'>
                <a href="s#">
                    News
                </a>
            </div>
            <div className='music'>
                <a href="s#">
                    Music
                </a>
            </div>
        </nav>
    );
};

export default Nav;