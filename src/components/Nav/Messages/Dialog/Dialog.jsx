import React from 'react';

import { NavLink } from 'react-router-dom';
import s from './../Dialog/Dialog.module.css'

const Dialog = (props) => {

    return (
        <div className={s.links}>
            <NavLink className={s.link} to={props.id}>
                {props.name}
            </NavLink>
        </div>
    );
};

export default Dialog;