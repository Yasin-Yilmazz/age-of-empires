import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="main">
      <div className="pages">
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/units">Units</Link>
      </div>
    </div>
  );
}

export default Navbar;
