import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <NavLink to='/portfolio/1'> Item 1 </NavLink>
        <NavLink to='/portfolio/2'> Item 2 </NavLink>
    </div>
);

export default PortfolioPage;