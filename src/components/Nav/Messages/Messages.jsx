import React from 'react';

import s from './../Messages/Messages.module.css';
import UnitDialog from './Dialog/UnitDialog/UnitDialog';
import Dialog from './Dialog/Dialog';

import { Outlet, Route, Routes } from 'react-router-dom';


const Messages = (props) => {

    let messagesData = props.messagesData

    let dialogData = props.dialogsData

    const dialogElements = dialogData.map(dialog => (
        <Dialog name={dialog.name} id={dialog.id} />
    ))

    const messagesElements = messagesData.map(message => (
        <UnitDialog text={message.message} />
    ))

    return (
        <div className='content'>
            <div className={s.container}>
                <div className={s.dialog}>
                    {dialogElements}
                </div>

                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
};

export default Messages;