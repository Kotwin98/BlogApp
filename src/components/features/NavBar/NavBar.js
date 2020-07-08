import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const navbar = () => (
    <div className="nav-container">
        <nav>
            <ul className="nav-bar">
                <li className="nav-link-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-link-item">
                    <Link to="/add-post" className="nav-link">Add post</Link>
                </li>
                <li className="nav-link-item">
                    <Link to="/posts" className="nav-link">Posts</Link>
                </li>
                <li className="nav-link-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
);

export default navbar;