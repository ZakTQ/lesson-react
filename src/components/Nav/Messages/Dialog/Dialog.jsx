import React from 'react';

import { NavLink } from 'react-router-dom';
import s from './../Dialog/Dialog.module.css'

const Dialog = (props) => {
    return (
        <div>
            <div className={s.links}>
                <NavLink className={s.link} to={props.id}>
                    {props.name}
                </NavLink>
            </div>
        </div>
    );
};

export default Dialog;