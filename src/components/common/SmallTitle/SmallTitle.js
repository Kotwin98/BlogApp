import React from 'react';

import './SmallTitle.scss';

const SmallTitle = ({ children, ...otherProps }) => (
    <h2 {...otherProps} className="small-title">
        { children }
    </h2>
);

export default SmallTitle;