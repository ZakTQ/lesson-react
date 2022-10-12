import React from 'react';
import s from './../UserInfo/UserInfo.module.css'

const userInfoData = {
    first_name: "Masha",
    second_name: "Volchok",
    age: 22,
    from: "New York",
}


const UserInfo = () => {


    return (
        <div>
            <div className={s.titleImg}>
                <img src="http://betafinance.ru/sites/default/files/news/b655c76706b606569ff3d1a1f4ce04e6.jpg" alt="" />
            </div>


            <div className={s.blockInfo}>
                <p>{userInfoData.first_name}</p>
                <p>{userInfoData.second_name}</p>
                <p>{userInfoData.age}</p>
                <p>{userInfoData.from}</p>
            </div>
        </div>
    )
}

export default UserInfo;