import React from 'react';

import './PageContainer.css';

const PageContainer = ({ children }) => (
    <div className="container-fluid">
        {children}
    </div>
);

export default PageContainer;