import React from 'react';
import UserInfo from './UserInfo/UserInfo'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {

    return (
        <div>
            <div className='content'>
                <UserInfo />
                <MyPosts />
            </div>
        </div>
    );
};

export default Profile;