import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () =>
{
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/main">Main Articles</Link></li>
                <li className="nav-item"><Link to="/services">Services</Link></li>
                <li className="nav-item"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
