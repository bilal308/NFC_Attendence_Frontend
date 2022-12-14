import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ path, title }) => {
  return (
    <NavLink
      to={path}
      style={({ isActive }) => ({
        borderBottom: isActive ? '1px solid black' : 'none',
        color: 'black',
        fontSize: '1rem',
        textDecoration: 'none',
        padding: '0.5em 1em',
      })}
    >
      {title}
    </NavLink>
  );
};

export default NavigationLink;
