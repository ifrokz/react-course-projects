import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName='is-active' to='/' exact={true}>Dashboard<p/></NavLink>
        <NavLink activeClassName='is-active' to='/create'>Create<p/></NavLink>
        <NavLink activeClassName='is-active' to='/help'>Help<p/></NavLink>
    </header>
);

export default Header;