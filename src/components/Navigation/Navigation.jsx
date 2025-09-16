import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/admissions">Admissions</Link>
                </li>
                <li>
                    <Link to="/academics">Academics</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

function Home() {
  return (
    <div>
      {/* Page content */}
    </div>
  );
}

export default Navigation;