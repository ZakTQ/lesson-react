let store = {

    getState() {
        return (
            this._state
        )
    },

    _state: {
        profileData: {
            myPostsData: [
                {
                    id: 1,
                    message: 'hello !',
                    like: 11
                },
                {
                    id: 2,
                    message: 'buy coffe&!&!&!',
                    like: 5
                },
                {
                    id: 3,
                    message: 'Im sleeping >_<!!!',
                    like: 7
                },
            ],

            userInfoData:
            {
                first_name: "Masha",
                second_name: "Volchok",
                age: 22,
                from: "New York",
            },

            newPostText: 'it-com',
        },

        
        dialogsData: [
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
                name: 'koko44',
                id: '4'
            },
            {
                name: 'koko33',
                id: '5'
            },
            {
                name: 'koko22',
                id: '6'
            },
        ],

        messagesData: [
            {
                user: 'you',
                message: 'hello1',
                id: 1
            },
            {
                user: 'you2',
                message: 'hello22',
                id: 12
            },
            {
                user: 'you3',
                message: 'hello33',
                id: 13
            },
            {
                user: 'you4',
                message: 'hello444',
                id: 14
            },
        ],

        newsData: {

        },

        musicData: {

        }
    },

    _callSubscriber() {
        console.log('state changet!')
    },

    addPost(postMessage) {
        let newPost = {
            id: 5,
            message: postMessage,
            like: 2
        }

        this._state.profileData.myPostsData.push(newPost)
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText) {
        this._state.profileData.newPostText = newText
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
}


export default store;
window.store = store;