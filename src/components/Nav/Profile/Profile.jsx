import React from 'react';
import UserInfo from './UserInfo/UserInfo'
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {

    return (
        <div className='content'>
            <UserInfo />
            <MyPosts
                myPostsData={props.myPostsData}
                addPost={props.addPost}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

export default Profile;