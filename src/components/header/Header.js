import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentPageTitle, setCurrentPageTitle] = useState(''); 
    const location = useLocation();

    React.useEffect(() => {
        const path = location.pathname;
        switch (path) {
            case '/':
                setCurrentPageTitle('Home');
                break;
            case '/about':
                setCurrentPageTitle('About');
                break;
            case '/contacts':
                setCurrentPageTitle('Contacts');
                break;
            default:
                setCurrentPageTitle('');
                break;
        }
    }, [location.pathname]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <nav className="navbar" onMouseLeave={closeDropdown}>
             <div className="title">Soft-Age-Service</div>
            <div className="nav-container">
                <ul>
                    <li>
                        <button className='link' onMouseEnter={toggleDropdown}>
                            {currentPageTitle} <span className="dropdown-arrow">&#9660;</span>
                        </button>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink to="/" onClick={closeDropdown}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" onClick={closeDropdown}>
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contacts" onClick={closeDropdown}>
                                        Contacts
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
