import React from 'react'

function Post(props) {
    return(
        <div>
            <span>{props.data.message}</span>
            <span>{props.data.likesCount}</span>
        </div>
    )
}

export default Post;