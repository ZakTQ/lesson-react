import React from 'react';
import Message from '../../Message/Message';
import s from './../UnitDialog/UnitDialog.module.css'

const UnitDialog = (props) => {

    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/236x/1e/fc/29/1efc29b5afa522acd012272b2d789349.jpg" alt="avatar" />
            <div>
                <Message text={props.text} />
            </div>
        </div>
    );
};

export default UnitDialog;