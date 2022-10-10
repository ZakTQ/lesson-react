import React from 'react';
import PostItem from './PostItem/PostItem'

const state = [
    {
        message: 'hello',
        like: 11
    },
    {
        message: 'buy',
        like: 23
    },
    {
        message: 'hey',
        like: 7
    },
    {
        message: 'dont worry',
        like: 5
    },
    {
        message: 'go on',
        like: 2
    },
]

let postList = state.map(e => <PostItem message={e.message} like={e.like} />)

const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div>
                {postList}
            </div>
        </div>
    );
};

export default MyPosts;