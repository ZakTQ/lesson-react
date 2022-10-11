import React from 'react';
import UserInfo from './UserInfo/UserInfo'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {

    return (
        <div className='content'>
            <UserInfo />
            <MyPosts />
        </div>
    );
};

export default Profile;