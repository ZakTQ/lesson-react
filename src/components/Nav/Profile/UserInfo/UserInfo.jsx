import React from 'react';

const UserInfoData = [
    {
        first_name: "Masha",
        second_name: "Volchok",
        age: 22,
        from: "New York",
    },
    {
        first_name: "Masha",
        second_name: "Volchok",
        age: 22,
        from: "New York",
    },
    {
        first_name: "Masha",
        second_name: "Volchok",
        age: 22,
        from: "New York",
    }
]


const UserInfo = () => {

    // let renderList = { ...UserInfoData }

    // let result = () => (renderList.forEach(function (e) {
    //     console.log(e)
    // }))

    return (
        <div>
            <div className='content-img'>
                <img src="http://betafinance.ru/sites/default/files/news/b655c76706b606569ff3d1a1f4ce04e6.jpg" alt="" />
            </div>

            <div>
                tyt oshibki!
            </div>
        </div>
    )
}

export default UserInfo;