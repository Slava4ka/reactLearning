import React from 'react'

function Post(props) {
    return(
        <div>
            <span>{props.data.message}</span>
            <br/>
            <span>Likes: {props.data.likesCount}</span>
            <br/>
            <br/>
        </div>
    )
}

export default Post;