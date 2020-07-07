import React from 'react';

const postSummary = props => (
    <div>
        <h2>{props.post.title}</h2>
        <p>{props.post.author}</p>
        <p>{props.post.content}</p>
    </div>
);

export default postSummary;