import React from 'react';
import UserInfo from './UserInfo/UserInfo'
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {

    return (
        <div className='content'>
            <UserInfo />
            <MyPosts myPostsData = {props.myPostsData}/>
        </div>
    );
};

export default Profile;