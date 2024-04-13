import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import AboutPage from '../pages/aboutPage/AboutPage';
import ContactsPage from '../pages/contactsPage/ContactsPage';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
    );
};

export default AppRoutes;
