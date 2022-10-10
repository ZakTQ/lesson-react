import React from 'react';

import s from './../Messages/Messages.module.css';

import UnitDialog from './Dialog/UnitDialog/UnitDialog';
import Dialog from './Dialog/Dialog';
import { Outlet, Route, Routes } from 'react-router-dom';

const messagesData = [
    { message: 'hey' },
]

const DialogData = [
    {
        name: 'aliNa',
        id: '1'
    },
    {
        name: 'sver',
        id: '2'
    },
    {
        name: 'kowka',
        id: '3'
    },
    {
        name: 'koko',
        id: '4'
    },
]

const DialogRender = () => {

}

const Messages = () => {

    return (
        <div className='content'>

            <div className={s.container}>
                <div className={s.dialog}>
                    <Dialog name={'aliNa'} id={'1'} />
                    <Dialog name={'sver'} id={'2'} />
                    <Dialog name={'koko'} id={'3'} />
                </div>

                <div className={s.messages}>
                    <UnitDialog text={'hey'}/>
                    <UnitDialog text={'wow'}/>
                    <UnitDialog text={'wake up!'}/>

                    <Routes>
                        <Route path='dialog1' element={<UnitDialog />} />
                        <Route path='dialog2' element={<UnitDialog />} />
                        <Route path='dialog3' element={<UnitDialog />} />
                    </Routes>

                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Messages;