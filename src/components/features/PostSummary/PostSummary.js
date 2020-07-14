import React from 'react';

import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import './PostSummary.scss';

const postSummary = props => (
    <article className="post-summary">
        <SmallTitle>{props.post.title}</SmallTitle>
        <p>Author: {props.post.author}</p>
        <HtmlBox>{props.post.content}</HtmlBox>
    </article>
);

export default postSummary;