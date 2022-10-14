import React from 'react';
import PostItem from './PostItem/PostItem'
import s from './../MyPosts/MyPosts.module.css'

const MyPosts = (props) => {

    let postList = props.myPostsData.map(e => <PostItem message={e.message} like={e.like} />)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        props.updateNewPostText('')
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.wrapper}>
            <textarea
                className={s.textarea}
                ref={newPostElement}
                onChange={onPostChange}
                value={props.newPostText}
            />
            <div>
                <button onClick={addPost} className={s.btn}>add post</button>
            </div>
            <div>
                {postList}
            </div>
        </div>
    );
};

export default MyPosts;