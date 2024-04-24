import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

    const toggleSidePanel = () => {
        setIsSidePanelOpen(!isSidePanelOpen);
    };

    const closeSidePanel = () => {
        setIsSidePanelOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isSidePanelOpen && !event.target.closest('.side-panel') && !event.target.closest('.toggle-button')) {
                setIsSidePanelOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isSidePanelOpen]);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="title">Soft-Age-Service</div>
                <button className="toggle-button" onClick={toggleSidePanel}>☰</button>
                {isSidePanelOpen && (
                    <div className="side-panel">
                        <button className="close-button" onClick={closeSidePanel}>Х</button>
                        <ul>
                            <li><NavLink to="/" onClick={(e) => { e.stopPropagation(); }}>Home</NavLink></li>
                            <li><NavLink to="/about" onClick={(e) => { e.stopPropagation(); }}>About</NavLink></li>
                            <li><NavLink to="/contacts" onClick={(e) => { e.stopPropagation(); }}>Contacts</NavLink></li>

                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
