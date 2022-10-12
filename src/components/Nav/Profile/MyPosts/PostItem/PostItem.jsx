import React from 'react';
import s from './PostItem.module.css'

const PostItem = (props) => {
    let message = props.message
    let like = props.like

    return (
        <div className={s.item}>
            <div className={s.avatar}>
                <img src="https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1640231616_19-abrakadabra-fun-p-avi-dlya-vatsapp-20.jpg" alt="avatar" />
            </div>

            <div className={s.text}>
                <div className={s.message}>
                    {message}
                </div>
                <p className={s.like}>
                    like: <span>{like}</span>
                </p>
            </div>
        </div>
    );
};

export default PostItem;