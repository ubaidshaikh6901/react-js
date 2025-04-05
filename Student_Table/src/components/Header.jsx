import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
    return (
        <nav className="navbar">
            <h2 className="logo">Student App</h2>
            <div className="nav-links" style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Link to="/"><button>Home</button></Link>
                <Link to="/add">
                    <button style={{ marginBottom: 10, display: 'flex', flexWrap: 'wrap' }}>Add New Student</button>
                </Link>
            </div>
        </nav>
    );
};

export default Header;