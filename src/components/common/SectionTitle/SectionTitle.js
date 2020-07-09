import React from 'react';

import './SectionTitle.scss';

const SectionTitle = ({ children }) => (
    <h2 className="section-title">
        {children}
    </h2>
);

export default SectionTitle;