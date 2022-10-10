import React from 'react';

import UnitMessage from './../UnitMessage/UnitMessage'

const Message = (props) => {
    return (
        <div>
            <UnitMessage text={props.text} />
        </div>
    );
};

export default Message;