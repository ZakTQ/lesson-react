import React from 'react';

import s from './../UnitMessage/UnitMessage.module.css'

const unitMessage = (props) => {
    let textMessage = props.text

    return (
        <div className={s.item}>
            {textMessage}
        </div>
    );
};

export default unitMessage;