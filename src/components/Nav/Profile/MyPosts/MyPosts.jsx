import React from 'react';
import PostItem from './PostItem/PostItem'




const MyPosts = (props) => {

    let postList = props.myPostsData.map(e => <PostItem message={e.message} like={e.like} />)

    return (
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>add post</button>
            </div>
            <div>
                {postList}
            </div>
        </div>
    );
};

export default MyPosts;