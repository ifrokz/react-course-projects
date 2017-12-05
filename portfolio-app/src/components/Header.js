import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName='is-active' to='/' exact={true}>Dashboard<p/></NavLink>
        <NavLink activeClassName='is-active' to='/portfolio' exact={true}>Portfolio<p/></NavLink>
        <NavLink activeClassName='is-active' to='/contact' exact={true}>Contact<p/></NavLink>
    </header>
);

export default Header;